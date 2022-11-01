import {Dimensions, Image} from 'react-native'

import { Button } from '../../../components/Button'
import { LinearGradient } from 'expo-linear-gradient'

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'


import {BottomButtonsContainer, Container, DetailRow, DetailSection, DetailSectionTitle, InputLabel, InputsContainer, NameInput, Title, DivImage} from './styles'
import { useMemo, useState } from 'react'
import { useDatabasePlants } from '../../../contexts/DatabasePlantsContext'
import { Input } from '../../../components/Input'
import { useEffect } from 'react'
import { Titlebar } from '../../../components/TitleBar'
import { StatusBar } from 'expo-status-bar'

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

    return (<>
<StatusBar animated={true} translucent={true}/>
    <Titlebar title="" navigation={navigation} style={{position:"absolute", backgroundColor: "transparent", marginTop: 35}}/>
        <Container>     
            <LinearGradient 
            colors={
                ['rgba(163, 183, 195, 0.36)', 'rgba(69, 116, 122, 0.86)']
            }
            style={{alignItems:'center', borderRadius:10, flex:1}}
            >
                <DivImage>
            <Title>{name}</Title>
            
            
                
            <Image 
            source={img} 
            style={{alignSelf: 'center', marginBottom: 10,}}
            />

            </DivImage>
            
            <InputsContainer>
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
            </InputsContainer>
            </LinearGradient>
        </Container>
        </>
    )
}

export {NamePlant}