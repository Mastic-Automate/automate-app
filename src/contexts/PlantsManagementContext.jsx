import {createContext, useContext, useState} from 'react'

import {useMicrocontrollers} from '../hooks/useMicrocontrollers'

const PlantsManagementContext = createContext({})

export function PlantsManagementContextProvider({children}){
    const [addingPlant, setAddingPlant] = useState(null)
    const {saveNewDevice} = useMicrocontrollers()

    function savePlant(customName){
        saveNewDevice(addingPlant.idPlant, '44:44:44:44', '44:44:44:44', customName)
    }

    return (
        <PlantsManagementContext.Provider value={{addingPlant, setAddingPlant, savePlant}}>
            {children}
        </PlantsManagementContext.Provider>
    )
}

export function usePlantsManagement(){
    return useContext(PlantsManagementContext)
}