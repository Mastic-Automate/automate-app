import {Dimensions, Image} from 'react-native'

import { Button } from '../../../components/Button'


import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

import Carousel from 'react-native-snap-carousel'

import {BottomButtonsContainer, Container, DetailRow, DetailSection, DetailSectionTitle, InputLabel, InputsContainer, Title} from './styles'
import { CarouselCard } from './CarouselCard'
import { useMemo, useState } from 'react'
import { useDatabasePlants } from '../../../contexts/DatabasePlantsContext'
import { Input } from '../../../components/Input'
import { DivImage } from './styles'

const SLIDER_WIDTH = (Dimensions.get('window').width)
const ITEM_WIDTH = SLIDER_WIDTH*0.67

function AddPlant({name, sub, img, active}){

    img = require('../../../assets/suculenta.png');
    const {databasePlants} = useDatabasePlants()
    const [currentModelIndex, setCurrentModelIndex] = useState(0)

    const selectedPlant = useMemo(() => {
        return databasePlants[currentModelIndex]
    }, [currentModelIndex, databasePlants])

    function handleAddPlant(data){
        console.log(selectedPlant)
    }
    if(!selectedPlant){
        return (
            <Container>
                <Title>Carregando...</Title>
            </Container>
        )
    }

    return (
        <Container>
            
            <DivImage>
            <Image 
            source={img} 
            style={{alignSelf: 'center', flex:1}}
            />
            </DivImage>

        </Container>
    )
}

export {AddPlant}