import styled from 'styled-components/native'


const Container = styled.ScrollView`
    flex:1;
    background-color: ${props => props.theme.background};
`

const CarouselWrapper = styled.View`
    height: 100%;
    max-height: 400px;
    margin-top: 10px;

    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 30px;
    width:100%;
    text-align:center;
    font-family:Poppins;
`

const InputsContainer = styled.View`
    width:100%;

`
const InputLabel = styled.Text`
    color: ${props => props.theme.secondary1};
    font-size: 20px;
`
const DetailSection = styled.View`
    background-color: ${props => props.theme.background2};
    padding: 20px;
    border-top-left-radius: 60px;
`
const DetailSectionTitle = styled.Text`
    font-size: 20px;
    font-family:Poppins700;
    width: 100%;
    text-align:center;
    color: ${props => props.theme.title};
    margin-bottom: 20px;
`
const DetailRowLabel = styled.Text`
    color: ${props => props.theme.title};
    font-size: 18px;
    font-family: actor;
`
const DetailRowValue = styled.Text`
    color: ${props => props.theme.text2};
    font-size: 18px;
    font-family: Oswald200;
`
const DetailRowContainer = styled.View`
    flex-flow: row nowrap;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 8px;
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
    margin-bottom: 50px;
`
export { 
    Container, 
    CarouselWrapper,
    Title, 
    InputsContainer, 
    InputLabel, 
    BottomButtonsContainer,
    DetailRow,
    DetailRowContainer,
    DetailSection,
    DetailSectionTitle,
}