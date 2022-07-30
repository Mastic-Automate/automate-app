import { useTheme } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

import {
    Container, 
    Title,
    AddButton,
    MainContent,
    SomePlantsContainer,
    UserPlantsContainer,
    UserPlantsTitle
} from './styles'
import { PlantCard } from './PlantCard';
import {UserPlantCard} from './UserPlantCard'

import {appImages} from '../../global/images'

const plants = [
    {
        text: 'Meus tomates',
        id: '1'
    },
    {
        text: 'Pimenta',
        id: '2'
    },
    {
        text: 'Coentro',
        id: '3'
    },
]

export function Plants({ navigation }) {
    const { primary } = useTheme();

    return (
        <Container>
            <MainContent>
                <Title>Todas as plantas</Title>
                <SomePlantsContainer horizontal>
                    {plants.map(plant => {
                        return (
                            <PlantCard 
                                description="Descrição"
                                id={plant.id}
                                image={appImages['plant_corner']}
                                name={plant.text}
                                key={plant.id}
                                style={{marginLeft:10}}
                            />
                        )
                    })}
                </SomePlantsContainer>
                <UserPlantsTitle horizontal>
                    Suas plantas
                </UserPlantsTitle>
                <UserPlantsContainer horizontal>
                    <UserPlantCard 
                        image={appImages['plant_corner']}
                        name="Suculenta"
                        description="Sala"
                        style={{marginLeft:10}}
                    />
                    <UserPlantCard 
                        image={appImages['plant_corner']}
                        name="Suculenta1"
                        description="Telhado"
                        style={{marginLeft:10}}
                    />
                </UserPlantsContainer>
            </MainContent>
            
            <AddButton onPress={() => navigation.navigate('bluetooth-connection', { target: 'add-plant', params: {} })}>
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