import { useQuery } from "react-query";
import { api } from "../services/api";

async function fetchDatabasePlants() {
    const { data } = await api.get('/getPlants')
    return data
}

export const useDatabasePlants = () => useQuery('database-plants', fetchDatabasePlants)