import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    padding: 10px;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: space-around;
    height: 100%;
`

const Title = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.title};
    width: 100%;
    text-align: center;
`

const BottomText = styled.Text`
    color: ${props => props.theme.secondary1};
    font-size: 20px;
    width: 100%;
    text-align:center;
`

const BottomLink = styled.TouchableOpacity`
    width: 50%;
    text-align:center;
`
const BottomLinkText = styled.Text`
    text-align:center;
    color: ${props => props.theme.primary};
    font-weight: bold;
    font-size: 20px;
    font-family: Poppins;
    width: 100%;
`

const InputsView = styled.View`
    margin: 10px;
    width: 100%;
`

const BottomView = styled.View`
    align-items:center;
`
const ErrorText = styled.Text`
    color: ${props => props.theme.error};
    width: 100%;
    text-align:center;
`

export {
    BottomLink, 
    BottomLinkText, 
    BottomText, 
    BottomView, 
    Container, 
    InputsView, 
    Title,
    ErrorText
}