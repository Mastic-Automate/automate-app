import styled from 'styled-components/native';

const Container = styled.ScrollView`
    background-color:${props => props.theme.background};
    flex:1;
    height: 100%;
`

const HeadingSection = styled.View`
    width:100%;
    height:300px;
    background-color: ${props => props.theme.background1};
    padding: 8px;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 24px;
    width: 100%;
    text-align:center;
    margin-top: 25px;
`
const AccountSection = styled.TouchableOpacity`
    flex-flow: row nowrap;
    padding-left:10px;
    padding-right:10px;
    margin-bottom: 10px;
`
const AccountImage = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 37.5px;
`
const AccountSectionInfoCol1 = styled.View`
    flex:1;
    justify-content:center;
    margin:10px;
`
const AccountUserName = styled.Text`
    color: ${props => props.theme.title};
    font-family: ProximaNova;
    font-size: 24px;
`
const AccountUserEmail = styled.Text`
    font-size:16px;
    color: ${props => props.theme.text1};
`
const MessageContainer = styled.View`
    background-color: ${props => props.theme.purple};
    height: 120px;
    width: 100%;
    border-radius: 8px;
    flex-flow: row nowrap;
    align-items:center;
    padding:16px;
    margin-top:8px;
`
const MessageContainerCol1 = styled.View`
    flex:1;
`
const MessageContainerCol2 = styled.View`
    width:100px;
    height:100px;
`

const MessageContainerText = styled.Text`
    color: #ffffff;
    font-size:18px;
    font-family: Montserrat_400Regular;
`

const MainSection = styled.View`
    flex: 1;
    width:100%;
    min-height: 500px;    
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${props => props.theme.background2};
    padding-left:8px;
    padding-right:8px;
    padding-top:16px;
`
const SectionTitle = styled.Text`
    margin-top: 60px;
    padding: 0 20px;
    font-size: 20px;
    color: ${props => props.theme.title};
    font-family: Montserrat_600SemiBold;
`

const SectionOptions = styled.View`
    margin-top: 60px;
    padding: 0 20px;
    font-size:24px;
    color: ${props => props.theme.title};
    font-family: Montserrat_600SemiBold;
`

const InputsRow = styled.View`
    flex-flow: row nowrap;
    position: absolute;
    top: -25px;
    width: 100%;
    padding-left:20px;
`

const ThemeButton = styled.TouchableOpacity`
    border-radius: 10px;
    margin-right: 20px;
    background-color: ${props => props.theme.themeButton};
    align-items:center;
    justify-content:center;
    width: 64px;
    height: 64px;
`

export {
    Container,
    Title,
    HeadingSection,
    MainSection,
    SectionTitle,
    MessageContainer,
    MessageContainerText,
    MessageContainerCol1,
    MessageContainerCol2,
    AccountImage,
    AccountSection,
    AccountSectionInfoCol1,
    AccountUserEmail,
    AccountUserName,
    InputsRow,
    ThemeButton,
    SectionOptions,
}