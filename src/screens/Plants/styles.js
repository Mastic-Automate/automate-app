import styled from 'styled-components/native'

const Container = styled.View`
    background: ${props => props.theme.background};
    flex: 1;
`;

const MainContent = styled.ScrollView`
    flex:1;
    background-color: ${props => props.theme.background1};
`

const TopSection = styled.View`
    background: ${props => props.theme.background1};
    justify-content: flex-end;
    height: 200px;
    padding: 50px 0;
`;

const PlantSection = styled.View`
    background: ${props => props.theme.background2};
    padding: 80px 0;
    z-index: 1;
    position: relative;
`;

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
    width: 100%;
    text-align:left;
    font-family: SuperaGothic;
margin-left: 44px;
`

const InputsRow = styled.View`
    flex-flow: row nowrap;
    position: absolute;
    margin-left:25px;
    margin-right:25px;
    top: -33px;
    z-index: 2;
`;

const FilterButton = styled.TouchableOpacity`
    border-radius: 10px;
    margin-left: 10px;
    background-color: ${props => props.theme.green};
    align-items:center;
    justify-content:center;
    width: 60px;
    height: 60px;
`;

const SomePlantsContainer = styled.ScrollView`
    overflow: hidden;
    padding-left: 12px;
    padding-right:50px;
    width: 100%;
    margin-top: 10px;
`

const UserPlantsTitle = styled.Text`
    color: ${props => props.theme.text2};
    font-weight:bold;
    font-size: 30px;
    font-family: SuperaGothic;
    padding: 20px 20px;
    margin-top:8px;
`
const UserPlantsContainer = styled.ScrollView`
    overflow: hidden;
    padding-left: 12px;
    padding-right:50px;
    width: 95%;
    
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
    TopSection,
    PlantSection,
    SomePlantsContainer,
    UserPlantsContainer,
    UserPlantsTitle,
    InputsRow,
    FilterButton,

}