import { appImages } from "./images"

class Plant {
    id
    name
    description
    image
    water
    enviroment

    constructor(id, name, description, image, water, enviroment){
        this.id = id
        this.name = name
        this.description = description
        this.image = image
        this.water = water
        this.enviroment = enviroment
    }
}

export const plants = [
    new Plant('1', 'Suculenta', 'Fácil de cuidar', appImages['suculenta'], 10, 'Interno'),
    new Plant('2', 'Mirtilo', 'Fácil de cuidar', appImages['mirtilo'], 10, 'Interno'),
    new Plant('3', 'Morango', 'Fácil de cuidar', appImages['morango'], 10, 'Interno'),
    new Plant('4', 'Pimenta do Reino', 'Fácil de cuidar', appImages['pimenta_do_reino'], 10, 'Interno'),
    new Plant('5', 'Alho', 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries', appImages['alho'], 10, 'Interno'),
]

export function getPlantInfo(id){
    return plants.filter(plant => plant.id === id)[0]
}
function pickRandomItem(){
    const index = Math.floor(Math.random() * plants.length);
    return plants[index]
}

export function pickRandomPlants(count){
    let result = []
    while(result.length < count){
        const selected = pickRandomItem()
        if(!result.includes(selected)) {
            result.push(selected)
        }
    }
    return result
}