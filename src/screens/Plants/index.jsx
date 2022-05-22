import styled, { useTheme } from 'styled-components/native';
import { FlatList } from 'react-native'

import PlantTile from '../../components/PlantTile'
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
    background: ${props => props.theme.background};
    flex: 1;
    align-items:center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
`;

const PlantTileContainer = styled.ScrollView`
    width: 100%;
    margin-top: 32px;
`;

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
`

const AddButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

const plants = [
    {
        text: 'Meus tomates',
        id: '1'
    },
    {
        text: 'Pimenta',
        id: '2'
    },
]

export function Plants({ navigation }) {
    const { primary } = useTheme();


    return (
        <Container>
            <Title>Suas plantas</Title>
            <PlantTileContainer contentContainerStyle={{ alignItems: 'center' }}>
                {plants.map(plant => <PlantTile {...plant} key={plant.id} />)}
            </PlantTileContainer>
            <AddButton onPress={() => navigation.replace('bluetooth-connection', { target: 'add-plant', params: {} })}>
                <MaterialIcons
                    name='add-circle'
                    size={70}
                    color={primary}
                    style={{ margin: 3 }}
                />
            </AddButton>
        </Container>
    )
}