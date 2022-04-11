import styled from 'styled-components/native'

import {Text} from 'react-native'

import {Button} from '../../components/Button'
import {Input} from '../../components/Input'

const Container = styled.View`
    padding: 10px;
    align-items:center;
    justify-content:space-around;
    background-color:${props => props.theme.background};
    flex:1;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 30px;
`

const InputsContainer = styled.View`
    width: 100%;
`
const BottomButtonsContainer = styled.View`
    flex-direction:row;
    justify-content:center;
    width:100%;
`

const PlantInfoLabel = styled.Text`
    color: ${props => props.theme.secondary2};
    font-size: 20px;
`

function EditPlant({route}){
    const {id} = route.params
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
                <Button text="Remover planta" style={{marginTop:5}} />
                
            </InputsContainer>
            <BottomButtonsContainer>
                <Button text="Salvar" style={{flex:1, margin:5}} />
                <Button text="Cancelar" outline style={{flex:1, margin:5}} />
            </BottomButtonsContainer>
        </Container>
    )
}

export {EditPlant}