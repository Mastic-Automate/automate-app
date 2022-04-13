import styled from 'styled-components/native'

const Container = styled.View`
    justify-content: space-between;
    align-items:center;
    padding-left: 3px;
    padding-right: 3px;
    padding-top:6px;
    padding-bottom:6px;
    border-radius: 10px;
    background-color: ${props => props.theme.secondary4};
    flex-direction: row;
`

const InfoText = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.secondary1};
`
const ValueText = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.primary};
`

function InfoPlantTile({text, value}){
    return (
        <Container>
            <InfoText>
                {text}
            </InfoText>
            <ValueText>
                {value}
            </ValueText>
        </Container>
    )
}

export {InfoPlantTile}