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
        if (found === false) {
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
                    ifBonded().then(devices => {

                    });
                } else { 
                    RNBluetoothClassic.requestBluetoothEnabled().then(s => s?ifBonded().then(devices => {}):{}).catch(err=>  console.log("LIGA O BLUETOOTH SE NÃO NÃO ROLA IRMÃO")) 
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

    const ifBonded = async () => {
        RNBluetoothClassic.getBondedDevices().then(r => {

            const A = r.filter(device => device.name === 'Automate');
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


    
    const Scanear = async () => {
    
        if (found) {
            //automateDevice.isConnected()? Connect(automateDevice).catch(err=>{}): console.log("Dispositivo já conectado");
            return automateDevice
        }
    }
    
    const verifyDevices = async (d) =>  { 
        if (d!==undefined) {
            const automateDevicesFound = d.filter(device => device.name === "Automate")[0]
            if (!automateDevicesFound) {
                console.log('Dispositivo não foi localizado, Pesquisando novamente');
                setCounter(counter+1);
                setFound(false);
            } else {
                RNBluetoothClassic.cancelDiscovery();
                console.log("Scan Pausado, Dispositivo encontrado");
                setAutomateDevice(automateDevicesFound)
                setFound(true);
            }
        }
    }

    const Connect = async (device) => {
      let tf =false;
        await device.isConnected().then(async r =>  {
      if (!r){
       
       while (tf === false) {
        console.log("Conectando...");
        const d = await device.connect().catch(async err => {return false}).then(d => {console.log(d? 'Dispositivo conectado': 'Dispositivo Desconectado');  
        
        if (d){tf = true;}
      });
    }
          return tf
        }
       
      })
     
    //  console.log("chegou o resultado "+d);
      return [device, tf]
    
       
    }
    
    const Disconnect = async (device) => {
        
       let d = await device.disconnect().catch(error => {});
    
       console.log(d? "Dispositivo Desconectado": 'O dispositivo já está desconectado');
      return d
    }
    
    const SendMessage = async (device, message) => {
        device.isConnected().then((isConnected) => {
            if(isConnected){
                const msg = JSON.stringify({
                    command: 'setUmidade',
                    arg:"50"
                })
                device.write(message, 'utf-8').then(delivered => console.log(delivered? "Mensagem enviada":"Mensagem não enviada")).catch(err => console.log('Não foi Possível enviar a mensagem, certifique-se de ter Conectado o Automate'));
            
            } else{
                console.log('Ainda não pode escrever!');
                return false
            }
        })
    
    }
    
    const DataRead = async (device) => {
    
      // .then(message => {console.log(message); return message});
       console.log("Começou leitura");
    
      device.available().then(messages => console.log('Numero dentro do buffer: '+messages));
      
      device.read().then(message => console.log("Mensagem lida: "+message));
        
      // let messages = await device.available();
      // if (messages > 0) {
       //var message = await device.read().then(message => {console.log(message === null? "": message); return message});
        device.clear();
      // }
       RNBluetoothClassic.onDeviceRead(device.id, ({ data }) => console.log(data));
       return "";
    }
    return (
        <BluetoothConnectionContext.Provider value={{DataRead, SendMessage, Disconnect, Connect, Scanear, devicesFound, automateDevice, data}}>
            {children}
        </BluetoothConnectionContext.Provider>
    )
}

export function useBluetoothConnection(){
    return useContext(BluetoothConnectionContext)
}