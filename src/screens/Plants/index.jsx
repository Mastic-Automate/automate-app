import styled, {useTheme} from 'styled-components/native';

import PlantTile from '../../components/PlantTile'
import {MaterialIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

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

const AddButton = styled.TouchableOpacity`
    position: fixed;
    bottom: 91px;
    right: 20px;
`;

export function Plants({navigation}){
    const {primary} = useTheme();
    return (
        <Container>
            <Title>Suas plantas</Title>
            <PlantTileContainer>
                <PlantTile 
                    text="Tomate"
                    id="a"
                />
                <PlantTile 
                    text="Pimenta"
                    id="b"
                />  
            </PlantTileContainer>
            <AddButton onPress={() =>navigation.replace('bluetooth-connection', {target:'add-plant', params:{}}) }>
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