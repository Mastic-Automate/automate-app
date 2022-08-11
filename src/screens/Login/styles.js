import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    height: 100%;
`
const BackgroundImage = styled.ImageBackground`
    width:100%;
    height:100%;
    align-items: center;
    justify-content:flex-end;
`

const Menu = styled.View`
    background-color: ${props => props.theme.background3};
    border-top-left-radius:40px;
    border-top-right-radius:40px;
    width:100%;

    padding-top: 11.5%;
    padding-bottom:20px;
    height: 80%;
    
`

const HeadingSection = styled.View`
    margin-left: 5%;

`

const Title = styled.Text`
    font-size: 36px;
    font-family: ProximaNova;
    color: #003553;
    margin-left: 19px;
    margin-bottom: 1%;
`
const Subtitle = styled.Text`
    color: #003553;
    font-size: 26px;
    font-family: ProximaNova;
    margin-left: 19px;
    font-weight: 600;
    font-style: normal;
`

const BottomText = styled.Text`
    color: ${props => props.theme.secondary1};
    font-size: 20px;
    width: 100%;
    text-align:center;
`

const BottomLink = styled.TouchableOpacity`
    text-align:center;
`
const BottomLinkText = styled.Text`
    text-align:center;
    color: ${props => props.theme.title};
    font-size: 19px;
    font-family: Poppins700;
`

const InputsView = styled.View`
    width: 84%;
    margin-left:8%;
    margin-top: 40px;
`

const AlignHelper = styled.View`
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
`

const BottomView = styled.View`
    flex-direction: column-reverse;
    width: 100%;
    flex: 1;
`
const ErrorText = styled.Text`
    color: ${props => props.theme.error};
    width: 100%;
    text-align:center;
`

const PlantImage = styled.Image`
    width: 150px;
    height: 250px;
    position:absolute;
    top: 50%;
    z-index: -1;
    left:0;
`

export {
    BottomLink, 
    BottomLinkText, 
    BottomText, 
    BottomView, 
    Container, 
    InputsView, 
    Title,
    ErrorText,
    Menu,
    Subtitle,
    HeadingSection,
    BackgroundImage,
    PlantImage,
    AlignHelper

}