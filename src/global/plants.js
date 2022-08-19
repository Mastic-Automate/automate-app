import { appImages } from "./images"

const plantImageById = {
    'default':appImages['plant1']
}

export function getPlantImage(id){
    const plantImage = plantImageById[id]
    if(!!plantImage){
        return plantImage
    }
    return plantImageById['default']
}