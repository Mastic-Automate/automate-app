import styled, {useTheme} from 'styled-components/native';

import PlantTile from '../../components/PlantTile'
import {MaterialIcons} from '@expo/vector-icons';

import {View, Text} from 'react-native';

const Container = styled.View`
    background: ${props => props.theme.background};
    flex: 1;
    align-items:center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
`;

const PlantTileContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
`;

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
`

const AddButton = styled.View`
    position: fixed;
    bottom: 91px;
    right: 20px;
    cursor: pointer;
`;

export function Plants(){
    const {primary} = useTheme();
    return (
        <Container>
            <Title>Suas plantas</Title>
            <PlantTileContainer>
                <PlantTile 
                    text="Tomate"
                />
                <PlantTile 
                    text="Pimenta"
                />  
            </PlantTileContainer>
            <AddButton>
                <MaterialIcons 
                    name='add-circle' 
                    size={58} 
                    color={primary} 
                    style={{margin:3}} 
                />
            </AddButton>
        </Container>
    )
}