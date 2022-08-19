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
    PlantImage,
    DetailInfosSection
} from './styles'
import { usePlantsManagement } from '../../contexts/PlantsManagementContext'

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório")
})

function SavePlant(){
    const {addingPlant, savePlant} = usePlantsManagement()
    const {handleSubmit, control, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function handleSavePlant(data){
        savePlant(data.name)
    }
    
    return (
        <Container
            contentContainerStyle={{alignItems:'center'}}
        >
            <Title>{addingPlant.plantName}</Title>
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
                    <DetailInfosSection>

                        <DetailRow 
                            label="Tempo"
                            value={addingPlant.plantTimeHarvest}
                        />
                        <DetailRow 
                            label="Temperatura ideal"
                            value={addingPlant.plantTemperature}
                        />
                        <DetailRow 
                            label="Quantidade de água"
                            value={addingPlant.plantWaterQuantity}
                        />
                    </DetailInfosSection>

                    <BottomButtonsContainer>
                        <Button text="Salvar planta" style={{flex:1, margin:30}} onPress={handleSubmit(handleSavePlant)} />
                    </BottomButtonsContainer>
                </DetailSection>
            </InputsContainer>
        </Container>
    )
}

export {SavePlant}