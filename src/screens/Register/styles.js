import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    padding:10px;
    background-color: ${props => props.theme.background};
    align-items:center;
    justify-content: space-around;
    flex:1;
`
const Content = styled.ScrollView`
    flex:1;
    width:100%; 
    height: 100%;
`
const Title = styled.Text`
    font-size:30px;
    color: ${props => props.theme.title};
    width:100%;
    text-align:center;
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
`
const LoginLinkText = styled.Text`
    color: ${props => props.theme.primary};
    font-size: 20px;
    font-weight: bold;
    font-family: Poppins;
`

export { Container, Content, BottomInfo, BottomText, Inputs, LoginLink, LoginLinkText, Title }