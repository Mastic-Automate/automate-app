import { appImages } from "./images"

const plantImageById = {
    'default':appImages['plant1'],
    '1':appImages['tomate'],
    '2':appImages['cebola'],
    '3':appImages['alface'],
    '4':appImages['alho'],
    '5':appImages['morango'],
    '6':appImages['pimenta_do_reino'],
    '7':appImages['mirtilo'],
    '8':appImages['coentro'],
    '9':appImages['hortela'],
}

export function getPlantImage(id){
    const plantImage = plantImageById[id]
    if(!!plantImage){
        return plantImage
    }
    return plantImageById['default']
}