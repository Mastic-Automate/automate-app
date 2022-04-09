import styled from 'styled-components/native';

import PlantTile from '../../components/PlantTile'
import {MaterialCommunityIcons as MaterialCommunity, MaterialIcons as Material} from '@expo/vector-icons'

import {View, Text} from 'react-native';

const Container = styled.View`
    background: ${props => props.theme.background};
    flex: 1;
    align-items:center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
`;

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
`

export function Plants(){
    return (
        <Container>
            <Title>Suas plantas</Title>
            <PlantTile 
                text="Olá"
            />
        </Container>
    )
}