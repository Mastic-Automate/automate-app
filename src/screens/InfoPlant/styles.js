import styled from 'styled-components/native'

const Container = styled.View`
    flex:1;
    justify-content:space-around;
    background-color:${props => props.theme.background1};
`

const Title = styled.Text`
    font-size: 48px;
    color: ${props => props.theme.title};
    font-family: SuperaGothic;
`

const HeaderSection = styled.View`
    width: 100%;
    padding-left: 20px;
    flex-direction: row;
    align-items:center;
`
const MidSection = styled.View`
    flex:1;
    flex-direction:row;
    margin-top: 5px;
`
const MidSectionCol1 = styled.View`
    padding-left: 12px;
`
const InfoSquare = styled.View`
    border: 4px solid ${props => props.theme.blue};
    width: 125px;
    height: 125px;
    border-radius: 20px;
    align-items:center;
    margin-bottom: 10px;
`
const InfoSquareText = styled.Text`
    color: ${props => props.theme.text1};
`

const MidSectionCol2 = styled.View`
    flex:1;
    height: 100%;
    align-items:flex-end;
`
const PlantImage = styled.Image`
    width: 300px;
    height: 300px;
    right: -100px;
`

const BottomSection = styled.View`
    width: 100%;
    height: 150px;
`
const BottomSectionTitle = styled.Text`
    font-size: 24px;
    font-family: Montserrat_800ExtraBold;
    color: ${props => props.theme.title};
`
const BottomText = styled.Text`
    color: ${props => props.theme.text2};
    font-size: 20px;
    font-family: Montserrat_400Regular;
    margin-top: 10px;
`

export {
    BottomSection,
    BottomText,
    Container,
    HeaderSection,
    InfoSquare,
    InfoSquareText,
    MidSection,
    MidSectionCol1,
    Title,
    MidSectionCol2,
    PlantImage,
    BottomSectionTitle
}