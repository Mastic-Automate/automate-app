import styled from 'styled-components/native'

const Container = styled.ScrollView`
    flex: 1;
    /* background-color:${props => props.theme.background1}; */
`

const Title = styled.Text`
    font-size: 48px;
    color: ${props => props.theme.title};
    font-family: SuperaGothic;
    z-index: 2;
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
    padding-left: 25px;
    justify-content: center;
`
const InfoSquare = styled.View`
    border: 4px solid ${props => props.theme.background2};
    background: ${props => props.theme.cardColor};
    width: 125px;
    height: 125px;
    border-radius: 20px;
    align-items:center;
    justify-content: space-around;
    margin-bottom: 10px;
`
const InfoSquareText = styled.Text`
    color: ${props => props.theme.text1};
`

const MidSectionCol2 = styled.View`
    flex:1;
    height: 100%;
    align-items:flex-end;
    z-index: 2;
`
const PlantImage = styled.Image`
    width: 300px;
    height: 300px;
    right: -100px;
`

const BottomSection = styled.View`
    width: 100%;
    padding: 30px 0;
`
const BottomSectionTitle = styled.Text`
    font-size: 24px;
    font-family: Montserrat_800ExtraBold;
    color: ${props => props.theme.title};
    padding-left: 20px;
    margin-top: 20px
`
const BottomText = styled.Text`
    color: ${props => props.theme.text2};
    font-size: 20px;
    font-family: Montserrat_400Regular;
    margin-top: 10px;
    padding: 0 20px;
    z-index: 2;
`

const RightSection = styled.View`
    position: absolute;
    right: 0;
    flex: 1;
    height: 100%;
    background: ${props => props.theme.background2};
    width: 30%;
`;

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
    BottomSectionTitle,
    RightSection
}