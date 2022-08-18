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

    useEffect(()=>{
        requestPlants()
    }, [])

    const pickRandomPlants = useCallback((count)=>{
        let result = []
        while(result.length < count){
            const selected = pickRandomPlant()
            if(!result.includes(selected)) {
                result.push(selected)
            }
        }
        return result
    }, [databasePlants])

    const pickRandomPlant = useCallback(() => {
        const index = Math.floor(Math.random() * databasePlants.length);
        return databasePlants[index]
    }, [databasePlants])

    return (
        <DatabasePlantsContext.Provider value={{databasePlants, requestPlants, pickRandomPlants}}>
            {children}
        </DatabasePlantsContext.Provider>
    )
}

export function useDatabasePlants(){
    return useContext(DatabasePlantsContext)
}