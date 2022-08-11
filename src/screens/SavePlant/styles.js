import styled from 'styled-components/native'

const Container = styled.ScrollView`
    flex:1;
    background-color: ${props => props.theme.background};
`

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 30px;
    width:100%;
    text-align:center;
    margin-top: 30px;
    font-family:Poppins;
`

const InputsContainer = styled.View`
    width:100%;
    flex:1;
`
const InputLabel = styled.Text`
    color: ${props => props.theme.secondary1};
    font-size: 20px;
`
const DetailSection = styled.View`
    height: 400px;
    width: 100%;
    background-color: ${props => props.theme.background2};
    padding-right: 30px;
    padding-left: 30px;
    border-top-left-radius:60px ;
`
const DetailSectionTitle = styled.Text`
    font-size:20px;
    font-family:Poppins700;
    width:100%;
    text-align:center;
    color: ${props => props.theme.title};
`
const DetailRowLabel = styled.Text`
    color: ${props => props.theme.title};
    font-size: 20px;
`
const DetailRowValue = styled.Text`
    color: ${props => props.theme.text2};
    font-size: 20px;
`
const DetailRowContainer = styled.View`
    flex-flow: row nowrap;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 10px;
`
const DetailRow = ({label, value}) => {
    return (
        <DetailRowContainer>
            <DetailRowLabel>
                {label}
            </DetailRowLabel>
            <DetailRowValue>
                {value}
            </DetailRowValue>
        </DetailRowContainer>
    )
}

const BottomButtonsContainer = styled.View`
    flex-direction:row;
`

const PlantImage = styled.Image`
    width: 300px;
    height: 400px;
`
export { 
    Container, 
    Title, 
    InputsContainer, 
    InputLabel, 
    BottomButtonsContainer,
    DetailRow,
    DetailRowContainer,
    DetailSection,
    DetailSectionTitle,
    PlantImage
}