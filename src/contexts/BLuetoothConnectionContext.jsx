import { PermissionsAndroid } from 'react-native';
import RNBluetoothClassic from 'react-native-bluetooth-classic';

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useMicrocontrollers } from '../hooks/useMicrocontrollers';

const BluetoothConnectionContext = createContext({})

export function BluetoothConnectionContextProvider({ children }) {
    const [devicesFound, setDevicesFound] = useState([]);
    const [searchingForDevices, setSearchingForDevices] = useState(true);
    const [bondedDevices, setBondedDevices] = useState([])
    const [automateDevice, setAutomateDevice] = useState({});
    const [isConnected, setIsConnected] = useState(false)
    const [deviceData, setDeviceData] = useState({})

    const { storedDevices } = useMicrocontrollers()

    useEffect(() => {
        RNBluetoothClassic.getConnectedDevices().then(devices => {
            console.log(devices)
            if (devices.length > 0) {
                console.log('Já está conectado')
                setIsConnected(true)
            } else {
                console.log('Não está conectado')
            }
        })
    }, [])

    function getDeviceById(id) {
        return devicesFound.find(device => device.id === id)
    }

    useEffect(() => {
        storedDevices.map((device) => {
            const deviceObj = getDeviceById(device.id)
            console.log('deviceObj')
            console.log(deviceObj)
        })
    }, [storedDevices])

    useEffect(() => {
        RNBluetoothClassic.getBondedDevices().then(devices => {
            setBondedDevices(devices)
        })
    }, [])

    useEffect(() => {
        if (bondedDevices.length > 0) {
            bondedDevices.map(device => {
                device.isConnected().then(is => {
                    console.log(`Device(id: ${device.id}) is connected: ${is}`)
                })
            })
        }

    }, [bondedDevices])

    async function startSearchForDevices() {
        const perm = await requestAccessFineLocationPermission()
        console.log(perm ? 'Permitido o Uso da localização' : "Não permitido o Uso da localização")
        if (perm) {
            const bluetoothEnable = await RNBluetoothClassic.isBluetoothEnabled()
            if (bluetoothEnable) {
                console.log('Escaneando')
                RNBluetoothClassic.startDiscovery().then(devices => {
                    console.log('Escaneou')
                    setDevicesFound(devices)
                }).catch(err => console.log('Já está em modo de descoberta'))
            } else {
                await RNBluetoothClassic.requestBluetoothEnabled().catch(err => console.log("LIGA O BLUETOOTH SE NÃO NÃO ROLA IRMÃO"))
            }

        };

    }
    async function endSearchForDevices() {
        console.log('Cancelada a busca')
        await RNBluetoothClassic.cancelDiscovery()
    }

    useEffect(() => {
        startSearchForDevices()
        return endSearchForDevices
    }, [])

    async function changeAutomateDevice(newDevice) {
        await disconnect(automateDevice)
        setAutomateDevice(newDevice)
    }

    useEffect(() => {
        RNBluetoothClassic.getConnectedDevices().then(devices => {
            console.log('Devices conectados a seguir')
            console.log(devices)
        })
    }, [])

    async function setupDevice() {
        const isConnected = await automateDevice.isConnected()
        if (isConnected) {
            RNBluetoothClassic.onDeviceRead(automateDevice.id, ({ data }) => {
                console.log("Dados recebidos")
                console.log(JSON.parse(data))
                setDeviceData(JSON.parse(data))
            })
        }
    }

    const loadDeviceData = useCallback(() => {
        if (isConnected) {
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

    useEffect(() => {
        if (isConnected && !!automateDevice && Object.keys(automateDevice).length > 0) {
            console.log(`Automate encontrado, configurando com id:${automateDevice.id}`)
            setupDevice().then(() => {
                console.log('Device configurado')
            })
            loadDeviceData()
        }

    }, [automateDevice, isConnected])

    useEffect(() => {
        if (isConnected) {
            const i = setInterval(loadDeviceData, 8000)
            return () => {
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

    const connect = useCallback(async (device) => {
        if (Object.keys(device).length > 0) {
            let deviceConnected = await device.isConnected()
            if (!deviceConnected) {
                await device.connect()
                setIsConnected(true)
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

    async function connectUsingId(id) {
        console.log('Iniciada conexão')
        const targetDevice = devicesFound.filter(device => device.id === id)[0]
        console.log(targetDevice)
        if (!!targetDevice) {
            setAutomateDevice(targetDevice)
        } else {
            console.log(`Tentando conectar a dispositivo não encontrado(${id})`)
        }
        return targetDevice
    }

    const disconnect = async () => {
        let d = await automateDevice.disconnect()
        console.log('Definindo automate device como null...')
        setAutomateDevice(null)
        console.log(d ? "Dispositivo Desconectado" : 'O dispositivo já está desconectado');
        setIsConnected(false)
        return d
    }

    const sendMessage = async (message) => {
        if (!!automateDevice) {
            if (isConnected) {
                automateDevice.write(message, 'utf-8')
                    .then(delivered => console.log(delivered ? "Mensagem enviada" : "Mensagem não enviada"))
                    .catch(err => console.log('Não foi Possível enviar a mensagem, certifique-se de ter Conectado o Automate'));
            } else {
                console.log('Ainda não pode escrever!');
                return false
            }
        } else {
            console.log('Não pôde enviar...')
        }
    }

    useEffect(() => {
        console.log('Automate device')
        console.log(automateDevice)
        if (!!automateDevice) {
            connect(automateDevice)
        }
    }, [automateDevice])

    useEffect(() => {
        console.log(`Conectado: ${isConnected}`)
    }, [isConnected])


    return (
        <BluetoothConnectionContext.Provider value={{
            sendMessage,
            disconnect,
            connect,
            devicesFound,
            automateDevice,
            devicesFound,
            deviceData,
            loadDeviceData,
            isConnected,
            connectUsingId,
            searchingForDevices,
            startSearchForDevices,
            getDeviceById
        }}>
            {children}
        </BluetoothConnectionContext.Provider>
    )
}

export function useBluetoothConnection() {
    return useContext(BluetoothConnectionContext)
}