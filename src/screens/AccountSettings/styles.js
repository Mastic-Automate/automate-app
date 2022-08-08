import styled from 'styled-components/native'

const Container = styled.View`
    padding-left: 10px;
    padding-right: 10px;
    align-items:center;
    background-color:${props => props.theme.background1};
    flex:1;
`

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 30px;
    width: 100%;
    text-align:center;
    margin-top: 30px;
`

const TilesContainer = styled.ScrollView`
    margin-top: 80px;
    width: 100%;
`
const ProfilePicture = styled.Image`
    height:150px;
    width:150px;
    border-radius: 75px;
`
const UserNameText = styled.Text`
    color: ${props => props.theme.title};
    font-family:ProximaNova;
    font-size:32px;
`
const EmailText = styled.Text`
    color: ${props => props.theme.text1};
    font-size: 24px;
`

export {
    Container,
    TilesContainer,
    Title,
    ProfilePicture,
    EmailText,
    UserNameText
}