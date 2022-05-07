import { Button } from '../../components/Button'

import {Input} from '../../components/Input'

import {BottomButtonsContainer, Container, InputLabel, InputsContainer, Title} from './styles'

function AddPlant(){
    return (
        <Container>
            <Title>Adicionar planta</Title>
            <InputsContainer>
                <InputLabel>Nome</InputLabel>
                <Input placeholder="Tomates incríveis"  />
                <InputLabel>Modelo</InputLabel>
                <Input placeholder="Tomate"  />
            </InputsContainer>
            <BottomButtonsContainer>
                <Button text="Salvar" style={{flex:1, margin:5}} />
                <Button text="Cancelar" style={{flex:1, margin:5}} outline />
            </BottomButtonsContainer>
        </Container>
    )
}

export {AddPlant}