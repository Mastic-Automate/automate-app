import styled from 'styled-components/native'

const Container = styled.ScrollView`
    background-color: ${props => props.theme.background1};
    flex: 1;

`
const Title = styled.Text`
    width: 120%;
    color: ${props => props.theme.title};
    font-size:28px;
    font-family: Montserrat_900Black;
    margin-top: 7%;
`
const TopMessageContainer = styled.View`
    flex-flow: row nowrap;
    margin-top: 5%;
`
const TopMessage = styled.Text`
    font-size: 16px;
    font-family: SuperaGothic400;
    color: ${props => props.theme.title};
    margin-right: 5px;


`

const TopSection = styled.View`
    height: 225px;
    background-color: ${props => props.theme.background1};
    flex-flow: row nowrap;
    position:relative;
`
const TopSectionCol1 = styled.View`
    flex:1;
    padding-left:30px;

    padding-bottom: 20px;
`
const TopSectionCol2 = styled.View`
    width: 150px;
    align-items:center;
    z-index:-1;
`
const TopPlantImage = styled.Image`
    position:absolute;
    right: -80px;
    width: 190%;
    height: 190%;
`

const PlantsSection = styled.View`
    background-color: ${props => props.theme.background2};
    flex:1;
    padding-top:35px;
    position:relative;
    top: 10px;
`
const PlantsSectionTitle = styled.Text`
    font-size:28px;
    color: ${props => props.theme.test1};
    font-family: SuperaGothic;
    margin-left: 30px;
    margin-top: 3%;
`

const RandomPlantsSection = styled.View`
    margin-top: 30px;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
`

const InputsRow = styled.View`
    flex-flow: row nowrap;
    position: absolute;
    top: -33px;
    width: 100%;
    padding-left:25px;
    padding-right:25px;
`

const FilterButton = styled.TouchableOpacity`
    border-radius: 10px;
    margin-right: 20px;
    background-color: #F6AC3D;
    align-items:center;
    justify-content:center;
    width: 64px;
    height: 64px;
    
`

export {
    Container,
    PlantsSection,
    PlantsSectionTitle, 
    Title,
    TopMessageContainer,
    TopMessage,
    TopSection,
    TopPlantImage,
    TopSectionCol1,
    TopSectionCol2,
    RandomPlantsSection,
    FilterButton,
    InputsRow
}