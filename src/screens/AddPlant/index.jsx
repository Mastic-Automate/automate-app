import {Dimensions} from 'react-native'

import { Button } from '../../components/Button'

import Carousel from 'react-native-snap-carousel'

import {BottomButtonsContainer, Container, DetailRow, DetailSection, DetailSectionTitle, InputLabel, InputsContainer, Title} from './styles'
import { CarouselCard } from './CarouselCard'
import { useMemo, useState, useEffect } from 'react'
import { useDatabasePlants } from '../../contexts/DatabasePlantsContext'
import { usePlantsManagement } from '../../contexts/PlantsManagementContext'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH*0.8

function AddPlant({navigation}){
    const {databasePlants} = useDatabasePlants()
    const {addingPlant, setAddingPlant} = usePlantsManagement()

    const [currentModelIndex, setCurrentModelIndex] = useState(0)

    const selectedPlant = useMemo(() => {
        return databasePlants[currentModelIndex]
    }, [currentModelIndex, databasePlants])

    useEffect(()=>{
        setAddingPlant(selectedPlant)
    }, [selectedPlant])

    function handleAddPlant(){
        navigation.navigate('save-plant')
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
            <Title>Adicionar planta</Title>
            <InputsContainer>
                <Carousel 
                    data={databasePlants}
                    renderItem={({item, index}) => {
                        return (
                            <CarouselCard 
                                name={item.plantName}
                                active={currentModelIndex === index}
                                img={item.image}
                                key={item.idPlant}
                                sub={item.plantAbout}
                            />
                        )
                    }}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    useScrollView
                    slideStyle={{
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    onSnapToItem={setCurrentModelIndex}
                />
                <DetailSection>
                    <DetailSectionTitle>Detalhes</DetailSectionTitle>
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
                        <Button text="Adicionar planta" style={{flex:1, margin:30}} onPress={handleAddPlant} />
                    </BottomButtonsContainer>
                </DetailSection>
            </InputsContainer>
        </Container>
    )
}

export {AddPlant}