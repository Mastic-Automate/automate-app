import RNBluetoothClassic from 'react-native-bluetooth-classic'
import { PermissionsAndroid } from 'react-native';

import { createContext, useContext } from "react";
import { useState, useEffect, useCallback } from 'react';

const BluetoothConnectionContext = createContext({})

export function BluetoothConnectionContextProvider({children}){
    const [devicesFound, setDevicesFound] = useState([]);
    const [found, setFound] = useState(null);
    const [counter, setCounter] = useState(0);
    const [automateDevice, setAutomateDevice] = useState({});
    const [isConnected, setIsConnected] = useState(false)
    const [deviceData, setDeviceData] = useState({})

    useEffect(()=> {
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
                    RNBluetoothClassic.requestBluetoothEnabled().catch(err=>  console.log("LIGA O BLUETOOTH SE NÃO NÃO ROLA IRMÃO"))
                }
       })};
    },[])

    async function setupDevice(){
        const isConnected = await automateDevice.isConnected()
        if(isConnected){
            RNBluetoothClassic.onDeviceRead(automateDevice.id, ({data}) => {
                console.log("Dados recebidos")
                console.log(data)
                setDeviceData(data)
            })
        }
    }

    const loadDeviceData = useCallback(()=> {
        if(isConnected){
            console.log('Requisitando dados...')
            sendMessage(JSON.stringify({
                "getReport": true,
                "plantData": false,
                "humidity": 0,
            }))
        } else {
            console.log('Não pôde requistar pois ainda não houve conexão')
            console.log(isConnected)
        }
    }, [isConnected])

    useEffect(()=> {
        if(isConnected){
            console.log(`Automate encontrado, configurando com id:${automateDevice.id}`)
            setupDevice().then(()=> {
                console.log('Device configurado')
            })
            loadDeviceData()
        }

    }, [automateDevice, isConnected])

    useEffect(()=>{
        if(isConnected){
            const i = setInterval(loadDeviceData, 8000)
            return ()=> {
                clearInterval(i)
            }
        }
    }, [isConnected])

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

    const connect = useCallback(async (device) => {
        if(Object.keys(device).length > 0){
            let deviceConnected = await device.isConnected()
            if(!deviceConnected){
                await device.connect()
                setIsConnected(true)
                console.log('Conectou com toda certeza, e para provar...')
                console.log(`Connected: ${isConnected}`)
            }

            console.log('Dispositivo conectado')
            sendMessage(JSON.stringify({
                "getReport": true,
                "plantData": false,
                "humidity": 0,
            }))

        }
    }, [isConnected])

    async function connectUsingId(id){
        const targetDevice = devicesFound.filter(device => device.id === id)[0]
        if(!!targetDevice){
            setAutomateDevice(targetDevice)
        }
    }
    
    const disconnect = async (device) => {
        let d = await device.disconnect().catch(error => {});
        console.log(d? "Dispositivo Desconectado": 'O dispositivo já está desconectado');
        setIsConnected(false)
        return d
    }
    
    const sendMessage = async (message) => {
        if(!!automateDevice){
            if(isConnected){
                automateDevice.write(message, 'utf-8')
                    .then(delivered => console.log(delivered? "Mensagem enviada":"Mensagem não enviada"))
                    .catch(err => console.log('Não foi Possível enviar a mensagem, certifique-se de ter Conectado o Automate'));
            } else{
                console.log('Ainda não pode escrever!');
                return false
            }
        } else {
            console.log('Não pôde enviar...')
        }
    }

    useEffect(() => {
        console.log('Automate device atualizado')
        if(!!automateDevice){
            connect(automateDevice)
        }
    }, [automateDevice])

    useEffect(()=>{
        console.log(`Conectado: ${isConnected}`)
    }, [isConnected])
    
    return (
        <BluetoothConnectionContext.Provider value={{sendMessage, disconnect, connect, devicesFound, automateDevice, devicesFound, deviceData, loadDeviceData, isConnected, connectUsingId}}>
            {children}
        </BluetoothConnectionContext.Provider>
    )
}

export function useBluetoothConnection(){
    return useContext(BluetoothConnectionContext)
}