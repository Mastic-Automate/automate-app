import { useTheme } from 'styled-components/native';

import { useNavigation } from '@react-navigation/native'

import { MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';

import {
    Container, 
    Title,
    AddButton,
    MainContent,
    TopSection,
    PlantSection,
    SomePlantsContainer,
    UserPlantsContainer,
    UserPlantsTitle,
    InputsRow,
    FilterButton,
    SearchInput,
} from './styles';

import {Input} from '../../components/Input';
import { PlantCard } from './PlantCard';
import {UserPlantCard} from './UserPlantCard';

import {plants} from '../../global/plants' ;
import {appImages} from '../../global/images';

import {useDatabasePlants} from '../../contexts/DatabasePlantsContext'

export function Plants({ navigation }) {
    const { primary } = useTheme();
    const {databasePlants} = useDatabasePlants()

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
                                    flex:1,
                                    borderRadius:5,
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
                                textInputProps={{color: "#dadada"}}
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
                                style={{marginHorizontal:5}}
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
            onPress={() => navigation.navigate('bluetooth-connection', { target: 'add-plant', params: {} })}
            //onPress={()=> navigation.navigate('add-plant', {})}
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