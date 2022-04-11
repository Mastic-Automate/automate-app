import { Text } from 'react-native'
import styled from 'styled-components/native'

import { Button } from '../../components/Button'
import {InfoPlantTile} from '../../components/InfoPlantTile'

const Container = styled.View`
    flex:1;
    justify-content:space-around;
    background-color:${props => props.theme.background};
    padding:10px;
`

const Title = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.title};
    width:100%;
    text-align:center;
`
const InfoTilesContainer = styled.View`
    flex:1;
    width:100%;
    margin-top: 30px;
`

function InfoPlant(){
    return (
        <Container>
            <Title>Informações da planta</Title>
            <InfoTilesContainer>
                <InfoPlantTile 
                    text="Umidade do solo"
                    value="20%"
                />
            </InfoTilesContainer>
            <Button text="Salvar relatório na nuvem" />
        </Container>
    )
}

export {InfoPlant}