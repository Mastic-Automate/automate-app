import styled from 'styled-components/native'

const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:space-around;
`

const Title = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.title};
`

function InfoPlant(){
    return (
        <Container>
            <Title>Informações da planta</Title>
        </Container>
    )
}

export {InfoPlant}