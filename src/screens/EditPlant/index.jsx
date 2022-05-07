import { Button } from '../../components/Button'
import {FormInput as Input } from '../../components/FormInput'

import {BottomButtonsContainer, Container, InputsContainer, PlantInfoLabel, Title} from './styles'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    model: yup.string().required("Modelo é obrigatório")
})

function EditPlant({ route }) {
    const { id } = route.params
    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })

    function handleSaveEdit(data){
        console.log(data)
    }
    return (
        <Container>
            <Title>Editar planta</Title>
            <InputsContainer>
                <PlantInfoLabel>Nome</PlantInfoLabel>
                <Input
                    placeholder="Nome da planta"
                    value="Meus tomates"
                    control={control}
                    name="name"
                    error={errors.name}
                />
                <PlantInfoLabel>Modelo</PlantInfoLabel>
                <Input
                    placeholder="Modelo da planta"
                    value="Tomate"
                    control={control}
                    name="model"
                    error={errors.model}
                />
                <Button text="Remover planta" style={{ marginTop: 5 }} negative />

            </InputsContainer>
            <BottomButtonsContainer>
                <Button text="Salvar" onPress={handleSubmit(handleSaveEdit)} style={{ flex: 1, margin: 5 }} />
                <Button text="Cancelar" outline style={{ flex: 1, margin: 5 }} />
            </BottomButtonsContainer>
        </Container>
    )
}

export { EditPlant }