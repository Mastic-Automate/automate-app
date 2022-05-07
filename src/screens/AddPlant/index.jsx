import { Button } from '../../components/Button'

import {FormInput as Input} from '../../components/FormInput'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {BottomButtonsContainer, Container, InputLabel, InputsContainer, Title} from './styles'

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    model: yup.string().required("Modelo é obrigatório")
})

function AddPlant(){
    const {handleSubmit, control, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function handleAddPlant(data){
        console.log(data)
    }
    
    return (
        <Container>
            <Title>Adicionar planta</Title>
            <InputsContainer>
                <InputLabel>Nome</InputLabel>
                <Input 
                    placeholder="Tomates incríveis"
                    control={control}
                    name="name"  
                    error={errors.name}
                />
                <InputLabel>Modelo</InputLabel>
                <Input 
                    placeholder="Tomate"
                    control={control}
                    name="model"
                    error={errors.model}
                />
            </InputsContainer>
            <BottomButtonsContainer>
                <Button text="Salvar" style={{flex:1, margin:5}} onPress={handleSubmit(handleAddPlant)} />
                <Button text="Cancelar" style={{flex:1, margin:5}} outline />
            </BottomButtonsContainer>
        </Container>
    )
}

export {AddPlant}