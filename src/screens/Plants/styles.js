import styled from 'styled-components/native'

const Container = styled.View`
    background: ${props => props.theme.background};
    flex: 1;
`;

const MainContent = styled.ScrollView`
    flex:1;
    background-color: ${props => props.theme.background2};
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
    width: 100%;
    text-align:center;
    font-family: SuperaGothic;
`
const SomePlantsContainer = styled.ScrollView`
`
const UserPlantsTitle = styled.Text`
    color: ${props => props.theme.text2};
    font-weight:bold;
    font-size:28px;
`
const UserPlantsContainer = styled.ScrollView`
    
`
const AddButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

export {
    Container,
    Title,
    AddButton,
    MainContent,
    SomePlantsContainer,
    UserPlantsContainer,
    UserPlantsTitle
}