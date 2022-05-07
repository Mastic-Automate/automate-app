import styled from 'styled-components/native'

const Container = styled.KeyboardAvoidingView`
    padding:10px;
    background-color: ${props => props.theme.background};
    align-items:center;
    justify-content: space-around;
    flex:1;
`
const Title = styled.Text`
    font-size:30px;
    color: ${props => props.theme.title};
`

const Inputs = styled.View`
    width:100%;
`

const BottomInfo = styled.View`
    align-items: center;
`
const BottomText = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.secondary1};
`

const LoginLink = styled.TouchableOpacity`
    color: ${props => props.theme.primary};
    font-size: 20px;
    font-weight: bold;
    font-family: Poppins;
`

export {Container, BottomInfo, BottomText, Inputs, LoginLink, Title}