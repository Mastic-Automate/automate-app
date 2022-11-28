import _ from 'lodash';

import {
    createContext, useCallback, useContext, useMemo
} from 'react';

import { useDatabasePlants } from '../hooks/useDatabasePlants';

import { getPlantImage } from '../global/plants';
import { useEffect } from 'react';

const DatabasePlantsContext = createContext({})

export function DatabasePlantsContextProvider({ children }) {
    const { data, isLoading, isSuccess } = useDatabasePlants()

    const databasePlants = useMemo(() => data?.map(plant => {
        return {
            ...plant,
            image: getPlantImage(plant.idPlant)
        }
    }, [data])) || []

    const pickRandomPlants = useCallback((count) => {
        let result = []
        for (let c = 0; c < count; c++) {
            const selected = pickRandomPlant()
            if (!!selected && !result.includes(selected)) {
                result.push(selected)
            }
        }
        return result
    }, [databasePlants])

    const pickRandomPlant = useCallback(() => {
        const selected = _.sample(databasePlants)
        return selected
    }, [databasePlants])

    return (
        <DatabasePlantsContext.Provider value={{ databasePlants, pickRandomPlants, isLoading, isSuccess }}>
            {children}
        </DatabasePlantsContext.Provider>
    )
}

export function useDatabasePlantsContext() {
    return useContext(DatabasePlantsContext)
}
