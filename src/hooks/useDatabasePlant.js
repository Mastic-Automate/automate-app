import { useQuery } from "react-query";
import { api } from "../services/api";

async function fetchPlantById(plantId){
    const {data} = await api.get(`/getPlant?id=${plantId}`)
    return data[0]
}

export const useDatabasePlant = (plantId)=> useQuery(['database-plant', plantId], () => fetchPlantById(plantId))