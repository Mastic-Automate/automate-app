import styled from 'styled-components/native'

import Card from '../../components/Card';

const Container = styled.View`
    background-color: ${props => props.theme.background};
    flex: 1;
    align-items:center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
`


const SubTitle = styled.Text`
    color: ${props => props.theme.subtitle};
    font-size: 20px;
    width: 100%;
    margin-top: 40px;
`

const CardsContainer = styled.View`
    margin-top: 75px;
    align-items:center;
`

export function Home(){
    return (
        <Container>
            <Title>Bem vindo(a)</Title>
            <SubTitle>Como estão suas plantas?</SubTitle>
            <CardsContainer>
                <Card text="Assista a conteúdos disponibilizados por profissionais na plataforma" theme='light' icon="play" />
                <Card text="Adicione mais uma planta à coleção" theme='light' icon="add" />
                <Card text="Gere relatório de cuidado de uma planta de sua coleção" theme='light' icon="info" />
            </CardsContainer>
        </Container>
    )
}