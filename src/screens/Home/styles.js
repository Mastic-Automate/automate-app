import styled from 'styled-components/native'

const Container = styled.ScrollView`
    background-color: ${props => props.theme.background1};
    flex: 1;
    padding-top: 20px;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
    font-family: Montserrat_900Black;
`

const TopSection = styled.View`
    height: 225px;
    background-color: ${props => props.theme.background1};
    flex-flow: row nowrap;
`
const TopSectionCol1 = styled.View`
    flex:1;
    padding-left:34px;
    justify-content:center;
`
const TopSectionCol2 = styled.View`
    width: 150px;
    align-items:center;
    z-index:-1;
`
const TopPlantImage = styled.Image`
`

const PlantsSection = styled.View`
    background-color: ${props => props.theme.background2};
    flex:1;
    padding-top:15px ;
`
const PlantsSectionTitle = styled.Text`
    font-size:28px;
    color: ${props => props.theme.title};
    font-family: SuperaGothic;
    margin-left: 20px;
`

const RandomPlantsSection = styled.View`
    margin-top: 30px;
    margin-bottom: 10px;
`

export {
    Container,
    PlantsSection,
    PlantsSectionTitle, 
    Title,
    TopSection,
    TopPlantImage,
    TopSectionCol1,
    TopSectionCol2,
    RandomPlantsSection
}