import {createContext, useEffect, useState} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const MicrocontrollersContext = createContext({})

function MicrocontrollersContextProvider({children}){
    const [storedDevices, setStoredDevices] = useState([])

    async function getSavedDevices(){
        const jsonCurrentSavedDevices = await AsyncStorage.getItem('@Microcontrollers')
        const currentSavedDevices = JSON.parse(jsonCurrentSavedDevices)
        if(currentSavedDevices === null){
            return []
        }
        return currentSavedDevices

    }

    function loadDevices(){
        getSavedDevices().then(devices => {
            setStoredDevices(devices)
        })
    }

    async function saveNewDevice(address, id, name, customName){
        const savedDevices = await getSavedDevices()
        const newDevice = {address, id, name, customName}
        await AsyncStorage.setItem('@Microcontrollers', JSON.stringify([...savedDevices, newDevice]))
        loadDevices()
    }
    async function removeDevice(address){
        const filteredDevices = storedDevices.filter(device => device.address !== address)
        AsyncStorage.setItem('@Microcontrollers', filteredDevices)
        loadDevices()
    }

    useEffect(()=>{
        loadDevices()
        // AsyncStorage.clear()
    }, [])

    return (
        <MicrocontrollersContext.Provider value={{saveNewDevice, removeDevice, storedDevices}}>
            {children}
        </MicrocontrollersContext.Provider>
    )
}

export {MicrocontrollersContextProvider, MicrocontrollersContext}