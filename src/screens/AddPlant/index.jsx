import styled from 'styled-components/native'
import { Button } from '../../components/Button'

import {Input} from '../../components/Input'

const Container = styled.View`
    padding: 10px;
    flex:1;
    background-color: ${props => props.theme.background};
`

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 30px;
    width:100%;
    text-align:center;
    margin-top: 80px;
`

const InputsContainer = styled.View`
    width:100%;
    flex:1;
`
const InputLabel = styled.Text`
    color: ${props => props.theme.secondary2};
    font-size: 20px;
`

const BottomButtonsContainer = styled.View`
    flex-direction:row;
`

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