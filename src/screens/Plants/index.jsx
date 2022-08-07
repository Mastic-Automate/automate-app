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


import {plants} from '../../global/plants' 
import {appImages} from '../../global/images'

export function Plants({ navigation }) {
    const { primary } = useTheme();

    return (
        <Container>
            <MainContent>
                <Title>Todas as plantas</Title>
                <SomePlantsContainer horizontal>
                    {plants.map(plant => (
                        <PlantCard 
                            description={plant.description}
                            id={plant.id}
                            image={plant.image}
                            name={plant.name}
                            key={plant.id}
                            style={{marginHorizontal:5}}
                        />
                    ))}
                    
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