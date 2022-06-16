
import RNBluetoothClassic, { BluetoothEventType, BluetoothDeviceReadEvent } from 'react-native-bluetooth-classic';
import { PermissionsAndroid } from 'react-native';
import { useEffect, useState } from 'react'
import { boolean } from 'yup';

export const Bluetooth = () => {
    const [unpaired, setUnpaired] = useState([])
    const [microController, setMicroController] = useState(null)
    const [paired, setPaired] = useState([])
    const [discovering, setDiscovering] = useState(null)

    const handleSendMessage = async (val) => {
        if(!!microController){
            const msg = JSON.stringify({
                command: 'setUmidade',
                arg:"50"
            })
            RNBluetoothClassic.writeToDevice(microController.address, msg, 'utf-8');
            return true
        } else{
            console.log('Ainda não pode escrever!');
            return false
        }
    }

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

    useEffect(()=>{
       
            //console.log(unpaired[1].name);

        RNBluetoothClassic.getBondedDevices().then(result => {
            setPaired(result)
        })

    })

    useEffect(() => console.log(unpaired), [unpaired, paired]);

    
    useEffect(()=>{
        if(!!microController){
            console.log('microcontrolador a seguir: ')
            console.log(microController)
            RNBluetoothClassic.connectToDevice(microController.address).then(resultDevice => {
                console.log('Resultado da conexão a seguir')
                console.log(resultDevice)
            })
        }
    }, [microController])


    function getUnpairedDevices() {
        
        RNBluetoothClassic.startDiscovery().then((result) => {
            setUnpaired(result)});
           { const targetDevices = [...unpaired, ...paired]
            if(unpaired.length>0){
                console.log('Escaneou')
    
                console.log(`Quantidade de aparelhos: ${targetDevices.length}`)
                const automateController = targetDevices.filter(device => device.name === "Automate")[0];
                console.log(automateController)
                if(!!automateController){
                    
                    setMicroController(automateController)
                    RNBluetoothClassic.getConnectedDevice(automateController.address).then(connectedDevice => {
                        if(!connectedDevice){
                            RNBluetoothClassic.pairDevice(automateController.address).then(result => {
                                RNBluetoothClassic.cancelDiscovery()
                                RNBluetoothClassic.connectToDevice(automateController.address)
                
                                console.log(result);
                            })
                        } else {
                            console.log('Aparelho já está conectado...')
                            return  unpaired;
                        }
                    })
                }
                //console.log(automateController)
    
            }
        }
            
        
    }
    getUnpairedDevices();
    console.log('vai pesquisar')
}

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

export const Scanear = async () => {

    const [paired, setPaired] = useState(null)
    const [automateDevice, setAutomateDevice] = useState({});
    const [devicesFound, setDevicesFound] = useState([])
    const [found, setFound] = useState(null);
    const [permissions, setPermissions] = useState(null);
    const [counter, setCounter] = useState(0)

  //  console.log('Permissão:');
    
  useEffect(() => {
   requestAccessFineLocationPermission().then(perm => {
       console.log(perm? 'Permitido o Uso da localização': "Não permitido o Uso da localização")
   });
  }, [])

    useEffect(()=>{
        RNBluetoothClassic.startDiscovery().then(devices => {
            console.log('Todos os devices a seguir: ')
            console.log(devices)
            setDevicesFound(devices)
        }).catch(err => console.log("Já está escaneando"))
    }, [counter])

    useEffect(() => { 
        const automateDevicesFound = devicesFound.filter(device => device.name === "Automate")[0]
        console.log('A seguir: ')
        console.log(automateDevicesFound)
        
        if (!automateDevicesFound) {
            setFound(false);
            console.log('Dispositivo não foi localizado, Pesquisando novamente');
            let c = counter;
            setCounter(counter+1)
        } else {
            RNBluetoothClassic.cancelDiscovery();
            console.log("Scan Pausado, Dispositivo encontrado");
            setAutomateDevice(automateDevicesFound)
            setFound(true);
            
            
        }
    
    
    },[devicesFound])
    if (found) {
        return automateDevice
    }
}

export const Connect = async (device) => {
 
  if (!device.isConnected()){
    await RNBluetoothClassic.pairDevice(device.id)
    .then(device => console.log(device))
    .catch(err => console.log('Connected Error'))
  }

 let d = await device.connect({
    CONNECTION_TYPE: 'delimited'
  })
    console.log(d? 'Dispositivo conectado': 'Dispositivo Desconectado');  

   return device
}

export const Disconnect = async (device) => {
    
   let d = await device.disconnect().catch(error => {});

   console.log(d? "Dispositivo Desconectado": 'O dispositivo já está desconectado');
  return d
}

export const SendMessage = async (device, message) => {
    if(device.bonded){
        const msg = JSON.stringify({
            command: 'setUmidade',
            arg:"50"
        })
        device.write(message, 'utf-8').then(delivered => console.log(delivered)).catch(err => console.log('Não foi Possível enviar a mensagem, certifique-se de ter Conectado o Automate'));
    
    } else{
        console.log('Ainda não pode escrever!');
        return false
    }

}

export const DataRead = async (device) => {

   let message = await device.read().then(message => {console.log(message); return message});
   
   
   return message;
}
