import styled from 'styled-components/native'

import {Ionicons, MaterialIcons} from '@expo/vector-icons'

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
`

export function Home(){
    return (
        <Container>
            <Title>Bem vindo(a)</Title>
            <SubTitle>Como estão suas plantas?</SubTitle>
            <CardsContainer>
                <Card 
                    text="Assista a conteúdos disponibilizados por profissionais na plataforma" 
                    iconName="play-circle-outline"
                    iconType={Ionicons}
                    style={{marginTop:10}}
                />
                <Card 
                    text="Adicione mais uma planta à coleção" 
                    iconName="add-circle-outline"
                    iconType={MaterialIcons}
                    style={{marginTop:10}}
                />
                <Card 
                    text="Gere relatório de cuidado de uma planta de sua coleção" 
                    iconName="info-outline" 
                    iconType={MaterialIcons}
                    style={{marginTop:10}}
                />
            </CardsContainer>
        </Container>
    )
}