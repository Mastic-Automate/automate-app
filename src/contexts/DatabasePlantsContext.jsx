import { useCallback, useEffect } from 'react'
import {createContext, useContext, useState} from 'react'
import { api } from '../services/api'

const DatabasePlantsContext = createContext({})

export function DatabasePlantsContextProvider({children}){
    const [databasePlants, setDatabasePlants] = useState([])

    const requestPlants = useCallback(() => {
        api.get('/getPlants').then(response => {
            setDatabasePlants(response.data)
        })
    }, [])

    return (
        <DatabasePlantsContext.Provider value={{databasePlants, requestPlants}}>
            {children}
        </DatabasePlantsContext.Provider>
    )
}

export function useDatabasePlants(){
    return useContext(DatabasePlantsContext)
}