import {Dimensions, Image} from 'react-native'

import { Button } from '../../../components/Button'


import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

import Carousel from 'react-native-snap-carousel'

import {BottomButtonsContainer, Container, DetailRow, DetailSection, DetailSectionTitle, InputLabel, InputsContainer, NameInput, Title, DivImage} from './styles'
import { CarouselCard } from './CarouselCard'
import { useMemo, useState } from 'react'
import { useDatabasePlants } from '../../../contexts/DatabasePlantsContext'
import { Input } from '../../../components/Input'


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
            style={{alignSelf: 'center',}}
            />
            </DivImage>

            <InputsContainer>
                <DetailSection>
                    <DetailSectionTitle>Nome da sua planta</DetailSectionTitle>
                    <NameInput />
                    <DetailRow 
                        label="Tempo de colheita"
                        value={selectedPlant.plantTimeHarvest}
                    />
                    <DetailRow 
                        label="Quantidade de água"
                        value={selectedPlant.plantWaterQuantity}
                    />
                    <DetailRow 
                        label="Temperatura ideal"
                        value={selectedPlant.plantTemperature}
                    />

                    <BottomButtonsContainer>
                        <Button text="Adicionar planta" style={
                            {
                                flex:1, 
                                margin:30, 
                                backgroundColor: "#0DD977",
                                shadowColor: "#06EA7C",
                                shadowOffset: {
                                    width: 0,
                                    height: 12,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 16.00,

                                elevation: 20,
                            }
                        } 
                            onPress={handleAddPlant} />
                    </BottomButtonsContainer>
                </DetailSection>
            </InputsContainer>

        </Container>
    )
}

export {AddPlant}