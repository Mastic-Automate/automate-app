import styled from 'styled-components/native'

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
export {Container, Title, InputsContainer, InputLabel, BottomButtonsContainer}