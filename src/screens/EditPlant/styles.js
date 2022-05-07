import styled from 'styled-components/native'

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

export {Container, Title, InputsContainer, BottomButtonsContainer, PlantInfoLabel}