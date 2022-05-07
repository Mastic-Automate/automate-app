import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import {BottomButtonsContainer, Container, InputsContainer, PlantInfoLabel, Title} from './styles'

function EditPlant({ route }) {
    const { id } = route.params
    return (
        <Container>
            <Title>Editar planta</Title>
            <InputsContainer>
                <PlantInfoLabel>Nome</PlantInfoLabel>
                <Input
                    placeholder="Nome da planta"
                    value="Meus tomates"
                />
                <PlantInfoLabel>Modelo</PlantInfoLabel>
                <Input
                    placeholder="Modelo da planta"
                    value="Tomate"
                />
                <Button text="Remover planta" style={{ marginTop: 5 }} negative />

            </InputsContainer>
            <BottomButtonsContainer>
                <Button text="Salvar" style={{ flex: 1, margin: 5 }} />
                <Button text="Cancelar" outline style={{ flex: 1, margin: 5 }} />
            </BottomButtonsContainer>
        </Container>
    )
}

export { EditPlant }