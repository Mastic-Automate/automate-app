import _ from 'lodash'

import { 
    useCallback, 
    createContext,
    useContext,
    useEffect,
} from 'react'

import { useDatabasePlants } from '../hooks/useDatabasePlants' 

import { getPlantImage } from '../global/plants'

const DatabasePlantsContext = createContext({})

export function DatabasePlantsContextProvider({children}){
    const {data, isLoading, isSuccess} = useDatabasePlants()

    const databasePlants = data?.map(plant => {
        return {
            ...plant,
            image: getPlantImage(plant.idPlant)
        }
    }) || []

    const pickRandomPlants = (count)=> {
        let result = []
        for(let c = 0; c< count; c++){
            const selected = pickRandomPlant()
            if(!result.includes(selected)) {
                result.push(selected)
            }
        }
        return result
    }
    
    const pickRandomPlant = useCallback(() => {
        const selected = _.sample(databasePlants)
        return selected
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