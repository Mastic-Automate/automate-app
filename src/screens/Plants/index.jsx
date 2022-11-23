import { useTheme } from 'styled-components/native';


import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import {
    AddButton, Container, FilterButton, InputsRow, MainContent, PlantSection, SearchInput, SomePlantsContainer, Title, TopSection, UserPlantsContainer,
    UserPlantsTitle
} from './styles';

import { PlantCard } from './PlantCard';
import { UserPlantCard } from './UserPlantCard';

import { appImages } from '../../global/images';

import { useDatabasePlants } from '../../contexts/DatabasePlantsContext';

export function Plants({ navigation }) {
    const { primary } = useTheme();
    const { databasePlants } = useDatabasePlants()

    return (
        <Container>
            <MainContent>
                <TopSection>
                    <Title>Todas as plantas</Title>

                </TopSection>


                <PlantSection>
                    <InputsRow>
                        <SearchInput
                            iconType={Feather}
                            iconName="search"
                            style={{
                                flex: 1,
                                borderRadius: 5,
                                fontFamily: "Montserrat_400Regular",
                                backgroundColor: "#FFF",
                                fontSize: 18,
                                shadowColor: "#3d3d3d",
                                shadowOffset: {
                                    width: 0,
                                    height: 12,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 16.00,

                                elevation: 15,
                            }}
                            placeholder="Pesquisar"
                            textInputProps={{ color: "#dadada" }}
                        />
                        <FilterButton>
                            <FontAwesome5
                                color="#ffffff"
                                size={26}
                                name="filter"
                            />
                        </FilterButton>
                    </InputsRow>
                    <SomePlantsContainer horizontal showsHorizontalScrollIndicator={false}>
                        {databasePlants.map(plant => (
                            <PlantCard
                                description={plant.plantAbout}
                                id={plant.idPlant}
                                image={plant.image}
                                name={plant.plantName}
                                key={plant.idPlant}
                                style={{ marginHorizontal: 5 }}
                            />
                        ))}

                    </SomePlantsContainer>
                    <UserPlantsTitle horizontal >
                        Suas Plantas
                    </UserPlantsTitle>
                    <UserPlantsContainer horizontal showsHorizontalScrollIndicator={false}  >
                        <UserPlantCard
                            image={appImages['plant_corner']}
                            name="Suculenta"
                            description="Sala"
                        />
                        <UserPlantCard
                            image={appImages['plant_corner']}
                            name="Suculenta1"
                            description="Telhado"
                        />
                    </UserPlantsContainer>
                </PlantSection>

            </MainContent>

            <AddButton
                onPress={() => navigation.navigate('bluetooth-connection')}
            >
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