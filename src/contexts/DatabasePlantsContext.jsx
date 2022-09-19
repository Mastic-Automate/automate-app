import { 
    useCallback, 
    useEffect,
    createContext,
    useContext,
    useState
} from 'react'

import { useDatabasePlants } from '../hooks/useDatabasePlants' 

import { getPlantImage } from '../global/plants'
import { api } from '../services/api'

const DatabasePlantsContext = createContext({})

export function DatabasePlantsContextProvider({children}){
    const {data, isLoading, isSuccess} = useDatabasePlants()

    const databasePlants = data?.map(plant => {
        return {
            ...plant,
            image: getPlantImage(plant.idPlant)
        }
    }) || []

    const pickRandomPlants = useCallback((count)=> {
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
        <DatabasePlantsContext.Provider value={{databasePlants, pickRandomPlants, isLoading, isSuccess}}>
            {children}
        </DatabasePlantsContext.Provider>
    )
}

function useDatabasePlantsContext(){
    return useContext(DatabasePlantsContext)
}

export {
    useDatabasePlantsContext as useDatabasePlants
}