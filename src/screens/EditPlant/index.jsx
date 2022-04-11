import styled from 'styled-components/native'

const Container = styled.View`
    padding: 10px;
    align-items:center;
    justify-content:space-around;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 30px;

`

function EditPlant({route}){
    const {id} = route.params
    return (
        <Container>
            <Title>Editar planta</Title>

        </Container>
    )
}

export {EditPlant}