import {Dimensions, Text, View} from 'react-native'

import { Button } from '../../components/Button'

import {FormInput, FormInput as Input} from '../../components/FormInput'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {appImages} from '../../global/images'

import {
    BottomButtonsContainer, 
    Container, 
    DetailRow, 
    DetailSection, 
    DetailSectionTitle, 
    InputLabel, 
    InputsContainer, 
    Title,
    PlantImage
} from './styles'

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório")
})

function SavePlant(){
    const {handleSubmit, control, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function handleSavePlant(data){
        console.log(data)
    }
    
    return (
        <Container
            contentContainerStyle={{alignItems:'center'}}
        >
            <Title>Adicionar planta</Title>
            <PlantImage 
                source={appImages['suculenta']}
            />
            <InputsContainer>
                <DetailSection style={{marginTop:10}}>
                    <InputLabel>Nome da sua planta</InputLabel>
                    <FormInput 
                        control={control}
                        name="name"
                        error={errors.name}
                        placeholder="Nome/Apelido"
                    />
                    <DetailRow 
                        label="Tempo"
                        value="2 semanas"
                    />
                    <DetailRow 
                        label="Ambiente"
                        value="Interno"
                    />
                    <DetailRow 
                        label="Iluminação"
                        value="5"
                    />

                    <BottomButtonsContainer>
                        <Button text="Salvar planta" style={{flex:1, margin:30}} onPress={handleSubmit(handleSavePlant)} />
                    </BottomButtonsContainer>
                </DetailSection>
            </InputsContainer>
        </Container>
    )
}

export {SavePlant}