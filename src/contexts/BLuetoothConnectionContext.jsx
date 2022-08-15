import RNBluetoothClassic from 'react-native-bluetooth-classic'
import { PermissionsAndroid } from 'react-native';

import { createContext, useContext } from "react";
import { useState, useEffect } from 'react';

const BluetoothConnectionContext = createContext({})

export function BluetoothConnectionContextProvider({children}){
    const [devicesFound, setDevicesFound] = useState([]);
    const [found, setFound] = useState(null);
    const [counter, setCounter] = useState(0);
    const [automateDevice, setAutomateDevice] = useState({});
    const [data, setData] = useState('')

    useEffect(()=>{
        if (!found) {
            console.log("Escaneando dispositivos...");
            RNBluetoothClassic.startDiscovery().then(devices => {
                setDevicesFound(devices);
                console.log('Todos os devices Scaneados a seguir: ')
                console.log(devices);
                verifyDevices(devices);
        }).catch(err => console.log("Já está escaneando"));
    }}, [found, counter])

    useEffect(() => {
        let perm = requestAccessFineLocationPermission().then(perm => {
           console.log(perm? 'Permitido o Uso da localização': "Não permitido o Uso da localização")
        });

        if (perm) {
            RNBluetoothClassic.isBluetoothEnabled().then(bluetoothEnable => {
                if(bluetoothEnable) { 
                    ifBonded('Automate').then(devices => {

                    });
                } else { 
                    RNBluetoothClassic.requestBluetoothEnabled().then(s => s?ifBonded("Automate").then(devices => {}):{}).catch(err=>  console.log("LIGA O BLUETOOTH SE NÃO NÃO ROLA IRMÃO")) 
                }
       })};
       
    },[])

    async function requestAccessFineLocationPermission() {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Access fine location required for discovery',
            message:
              'In order to perform discovery, you must enable/allow ' +
              'fine location access.',
            buttonNeutral: 'Ask Me Later"',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      };

    const ifBonded = async (deviceName) => {
        RNBluetoothClassic.getBondedDevices().then(r => {
            const A = r.filter(device => device.name === deviceName);
            if(A[0] === undefined){
                console.log("Dispositivo ainda não pareado");   
                setFound(false);
                verifyDevices();
            } else {               
                console.log("Dispositivo já pareado");
                setAutomateDevice(A[0]);
                setFound(true);
            }
            return r
        }).catch(err => {});
    }
    
    const verifyDevices = async (d) =>  { 
        if (d!==undefined) {
            const automateDevicesFound = d.filter(device => device.name === "Automate")
            if (!automateDevicesFound) {
                console.log('Dispositivo não foi localizado, Pesquisando novamente');
                setCounter(counter+1);
                setFound(false);
            } else {
                RNBluetoothClassic.cancelDiscovery();
                console.log("Scan Pausado, Dispositivo encontrado");
                setAutomateDevice(automateDevicesFound[0])
                setFound(true);
            }
        }
    }

    const connect = async (device) => {
        let deviceConnected = await device.isConnected()
        if(!deviceConnected){
            await device.connect()
        }
     
        console.log('Dispositivo conectado')
    }
    
    const disconnect = async (device) => {
        let d = await device.disconnect().catch(error => {});
        console.log(d? "Dispositivo Desconectado": 'O dispositivo já está desconectado');
        return d
    }
    
    const sendMessage = async (device, message) => {
        device.isConnected().then((isConnected) => {
            if(isConnected){
                device.write(message, 'utf-8').then(delivered => console.log(delivered? "Mensagem enviada":"Mensagem não enviada")).catch(err => console.log('Não foi Possível enviar a mensagem, certifique-se de ter Conectado o Automate'));
            } else{
                console.log('Ainda não pode escrever!');
                return false
            }
        })
    }

    useEffect(() => {
        if(!!automateDevice){
            connect(automateDevice)
        }
    }, [automateDevice])
    
    return (
        <BluetoothConnectionContext.Provider value={{sendMessage, disconnect, connect, devicesFound, automateDevice, data, devicesFound}}>
            {children}
        </BluetoothConnectionContext.Provider>
    )
}

export function useBluetoothConnection(){
    return useContext(BluetoothConnectionContext)
}