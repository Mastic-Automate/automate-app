import {useContext} from 'react'

import {MicrocontrollersContext} from '../contexts/MicrocontrollersContext'

function useMicrocontrollers(){
    const {storedDevices, saveNewDevice, removeDevice} = useContext(MicrocontrollersContext)
    return {
        storedDevices,
        saveNewDevice,
        removeDevice
    }
}

export {useMicrocontrollers}