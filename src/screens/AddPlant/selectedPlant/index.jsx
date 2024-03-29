import {View, Dimensions, Image} from 'react-native'

import { Button } from '../../../components/Button'
import { LinearGradient } from 'expo-linear-gradient'
import {useFocusEffect} from '@react-navigation/native'


import {BottomButtonsContainer, Container, DetailRow, DetailSection, DetailSectionTitle, InputLabel, InputsContainer, NameInput, Title, DivImage} from './styles'
import { useEffect, useMemo, useState } from 'react'
import { useDatabasePlants } from '../../../contexts/DatabasePlantsContext'
import { Titlebar } from '../../../components/TitleBar'
import { StatusBar } from 'expo-status-bar'

import Animated, { Keyframe, Easing, onChange } from 'react-native-reanimated';

const enteringAnimation = new Keyframe({
    0: {
        transform: [{ scale: 0.5}]
    },
    45: {
        transform: [{ scale: 0.7}],
        easing: Easing.linear,
    },
    100: {
        transform: [{ scale: 1}]
    },
  }).delay(300).duration(500)

const SLIDER_WIDTH = (Dimensions.get('window').width)
const ITEM_WIDTH = SLIDER_WIDTH*0.67

function NamePlant({navigation, route}){
    const {databasePlants} = useDatabasePlants()
    const currentPlant = databasePlants.find(plant => plant.idPlant === route.params.id)
    const [currentModelIndex, setCurrentModelIndex] = useState(0)

    const selectedPlant = useMemo(() => {
        return databasePlants[currentModelIndex]
    }, [currentModelIndex, databasePlants])

    

    function handleAddPlant(data){
        console.log(selectedPlant)
    }

    const img = currentPlant.image;
    const name = currentPlant.plantName
    console.log(currentPlant);

    if(!selectedPlant){
        return (
            <Container>
                <Title>Carregando...</Title>
            </Container>
        )
    }

    const [showView, setShowView] = useState(false)
    useFocusEffect(() => {
        setShowView(true)
        return () => {
            setShowView(false)
        }     
    })

    return (<>
        <StatusBar 
            animated={true} 
            translucent={true} 
            backgroundColor={theme.background}
        />
        <Titlebar 
            title="" 
            navigation={navigation} 
            style={{
                backgroundColor: theme.background, 
            }}
        />
        <Container>
            {showView && (
                <Animated.View 
                    entering={enteringAnimation}
                    style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            borderRadius: 18,
                            overflow: 'hidden',
                            zIndex: 0,
                        }}
                >
                    <LinearGradient 
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        colors={
                            ['rgba(163, 183, 195, 0.36)', 'rgba(69, 116, 122, 0.86)']
                        }
                    />
                </Animated.View>
            )}  

            <DivImage>
                <Title>{name}</Title>
                
                
                    
                <Image 
                source={img} 
                style={{alignSelf: 'center', marginBottom: 10,}}
                />

            </DivImage>
            
            <InputsContainer>
                <Animated.View>
                    <DetailSection>
                        <DetailSectionTitle>Nome da sua planta</DetailSectionTitle>
                        <NameInput placeholder="Nome/Apelido"/>
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
                </Animated.View>
            </InputsContainer>
    </Container>
    </>
    )
}

export {NamePlant}