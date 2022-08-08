import {Dimensions, Text, View} from 'react-native'

import { Button } from '../../components/Button'

import {FormInput as Input} from '../../components/FormInput'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import Carousel from 'react-native-snap-carousel'

import {BottomButtonsContainer, Container, DetailRow, DetailSection, DetailSectionTitle, InputLabel, InputsContainer, Title} from './styles'
import { CarouselCard } from './CarouselCard'
import { useMemo, useState } from 'react'
import { appImages } from '../../global/images'

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório")
})

const defaultModels = [
    {
        name:'tomate',
        enviroment:'interno',
        luminosity: 5,
        sub:'Fácil de cuidar',
        time: '2 a 4 semanas',
        img: appImages['plant_corner']
    },
    {
        name:'alface',
        enviroment:'externo',
        luminosity: 5,
        sub:'Fácil de cuidar',
        time: '2 a 10 semanas',
        img: appImages['plant_corner']
    }
]
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH*0.8

function AddPlant(){
    const [currentModelIndex, setCurrentModelIndex] = useState(0)
    const selectedPlant = useMemo(() => {
        return defaultModels[currentModelIndex]
    }, [currentModelIndex])
    const {handleSubmit, control, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function handleAddPlant(data){
        console.log(data)
        console.log(selectedPlant)
    }
    
    return (
        <Container>
            <Title>Adicionar planta</Title>
            <InputsContainer>
                <Carousel 
                    data={defaultModels}
                    renderItem={({item, index}) => {
                        return (
                            <CarouselCard 
                                name={item.name}
                                active={currentModelIndex === index}
                                img={item.img}
                                key={index}
                                sub={item.sub}
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
                <InputLabel>Nome</InputLabel>
                <Input 
                    placeholder="Tomates incríveis"
                    control={control}
                    name="name"  
                    error={errors.name}
                />
                <DetailSection style={{marginTop:10}}>
                    <DetailSectionTitle>Detalhes</DetailSectionTitle>
                    <DetailRow 
                        label="Tempo"
                        value={selectedPlant.time}
                    />
                    <DetailRow 
                        label="Ambiente"
                        value={selectedPlant.enviroment}
                    />
                    <DetailRow 
                        label="Iluminação"
                        value={selectedPlant.luminosity}
                    />
                </DetailSection>
            </InputsContainer>
            <BottomButtonsContainer>
                <Button text="Salvar" style={{flex:1, margin:5}} onPress={handleSubmit(handleAddPlant)} />
                <Button text="Cancelar" style={{flex:1, margin:5}} outline />
            </BottomButtonsContainer>
        </Container>
    )
}

export {AddPlant}