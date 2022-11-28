import { Dimensions } from 'react-native'

import { Button } from '../../components/Button'


import Carousel from 'react-native-snap-carousel'

import { useEffect, useMemo, useState } from 'react'
import { useDatabasePlantsContext } from '../../contexts/DatabasePlantsContext'
import { CarouselCard } from './CarouselCard'
import {
    BottomButtonsContainer, CarouselWrapper, Container, DetailRow,
    DetailSection,
    DetailSectionTitle, InputsContainer,
    Title
} from './styles'

import { useTheme } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Titlebar } from '../../components/TitleBar'

import { usePlantsManagement } from '../../contexts/PlantsManagementContext'


const SLIDER_WIDTH = (Dimensions.get('window').width)
const ITEM_WIDTH = SLIDER_WIDTH * 0.63

function AddPlant({ navigation }) {
    const { databasePlants } = useDatabasePlantsContext()
    const { addingPlant, setAddingPlant } = usePlantsManagement()

    const [currentModelIndex, setCurrentModelIndex] = useState(0)

    const selectedPlant = useMemo(() => {
        return databasePlants[currentModelIndex]
    }, [currentModelIndex, databasePlants])

    useEffect(() => {
        console.log('Selected plant')
        console.log(selectedPlant)
        setAddingPlant({ ...addingPlant, ...selectedPlant })
    }, [selectedPlant])

    function handleAddPlant() {
        navigation.navigate('save-plant')
    }

    const theme = useTheme();


    if (!selectedPlant) {
        return (
            <Container>
                <Title>Carregando...</Title>
            </Container>
        )
    }

    return (
        <>
            <StatusBar animated={true} translucent={false} style={{ backgroundColor: theme.background }} />
            <Titlebar navigation={navigation}
                style={{
                    backgroundColor: theme.background,
                }}

                title="Adicionar Planta"
            />
            <Container >

                <CarouselWrapper>
                    <Carousel
                        data={databasePlants}
                        renderItem={({ item, index }) => {
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

                        slideStyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onSnapToItem={setCurrentModelIndex}
                    />
                </CarouselWrapper>

                <InputsContainer>
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
                            <Button text="Selecionar Planta" style={
                                {
                                    flex: 1,
                                    margin: 30,
                                    backgroundColor: "#0DD977",
                                    shadowColor: "#06EA7C",
                                    shadowOffset: {
                                        width: 0,
                                        height: 12,
                                    },
                                    shadowOpacity: 1,
                                    shadowRadius: 16.00,
                                    width: 323,
                                    elevation: 20,
                                }}
                                onPress={handleAddPlant}
                            />
                        </BottomButtonsContainer>
                    </DetailSection>
                </InputsContainer>
            </Container>
        </>
    )
}

export { AddPlant }
