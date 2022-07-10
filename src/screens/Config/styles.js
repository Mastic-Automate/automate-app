import styled from 'styled-components/native'

const Container = styled.ScrollView`
    background-color:${props => props.theme.background};
    flex:1;
`

const HeadingSection = styled.View`
    width:100%;
    height:300px;
    background-color: ${props => props.theme.background1};
    padding-left:8px;
    padding-right:8px;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 24px;
    width: 100%;
    text-align:center;
    margin-top: 25px;
`
const MessageContainer = styled.View`
    background-color: ${props => props.theme.purple};
    height:130px;
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
`

const MainSection = styled.View`
    flex:1;
    width:100%;
    background-color: ${props => props.theme.background2};
    padding-left:8px;
    padding-right:8px;
    padding-top:16px;
`
const SectionTitle = styled.Text`
    font-size:24px;
    font-weight:bold;
    color: ${props => props.theme.title};
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
    MessageContainerCol2
}