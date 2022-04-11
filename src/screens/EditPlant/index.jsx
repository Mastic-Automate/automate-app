import styled from 'styled-components/native'

import {Text} from 'react-native'

import {Button} from '../../components/Button'

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
`
const BottomButtonsContainer = styled.View`
    flex-direction:row;
    justify-content:center ;
    width:100%;
`

function EditPlant({route}){
    const {id} = route.params
    return (
        <Container>
            <Title>Editar planta</Title>
            <InputsContainer>
                <Text>Input 1</Text>
                <Text>Input 2</Text>
                <Text>Input 3</Text>
            </InputsContainer>
            <BottomButtonsContainer>
                <Button text="Salvar" style={{flex:1, margin:5}} />
                <Button text="Cancelar" outline style={{flex:1, margin:5}} />
            </BottomButtonsContainer>
        </Container>
    )
}

export {EditPlant}