import { FlatList, View } from 'react-native'
import {Feather, FontAwesome5} from '@expo/vector-icons'
import { Plant } from '../../components/Plant'
import {InfoPlantCard} from '../../components/InfoPlantCard'
import {Input} from '../../components/Input'

import {
    Container, 
    PlantsSection, 
    PlantsSectionTitle, 
    Title, 
    TopSection,
    TopMessageContainer,
    TopPlantImage,
    TopSectionCol1,
    TopSectionCol2,
    RandomPlantsSection,
    TopMessage,
    InputsRow,
    FilterButton
} from './styles'

import {appImages} from '../../global/images'
import { useMemo } from 'react'
import { useDatabasePlants } from '../../contexts/DatabasePlantsContext'

export function Home(){
    const {pickRandomPlants} = useDatabasePlants()
    const randomPlants = useMemo(() => pickRandomPlants(3), [])
    return (
        <Container>
            <TopSection>
                <TopSectionCol1>
                    <Title>A melhor rosa está no seu jardim!</Title>
                    <TopMessageContainer>
                        <TopMessage>
                            Bom dia
                        </TopMessage>
                        <FontAwesome5 
                            name="sun"
                            size={20}
                            color="#FFCE31"
                        />
                    </TopMessageContainer>
                </TopSectionCol1>
                <TopSectionCol2>
                    <TopPlantImage 
                        source={appImages['plant1']}
                    />
                </TopSectionCol2>
            </TopSection>
            
            <PlantsSection>
                <InputsRow>
                    <FilterButton>
                        <FontAwesome5 
                            color="#ffffff"
                            size={30}
                            name="filter"
                        />
                    </FilterButton>
                    <Input 
                        iconType={Feather}
                        iconName="search"
                        style={{
                            flex:1
                        }}
                        placeholder="Pesquisar"
                    />
                </InputsRow>

                <PlantsSectionTitle>
                    Plantas recentes
                </PlantsSectionTitle>
                <FlatList
                    data={[
                        {variant:'yellow', title:'Amarelo'}, 
                        {variant:'red', title:'Vermelho'}, 
                        {variant:'blue', title:'Azul'}
                    ]}
                    horizontal
                    contentContainerStyle={{
                        marginLeft: 20
                    }}
                    renderItem={({item}) => {
                        return (
                            <Plant 
                                {...item}
                                image={appImages['plant1']}
                                subtitle="Sub"
                            />
                        )
                    }}
                    keyExtractor={(data)=> data.title}
                    showsHorizontalScrollIndicator={false}
                />
                <RandomPlantsSection>
                    {randomPlants.map(plant => {
                        return (
                            <InfoPlantCard 
                                image={plant.image}
                                description={plant.plantAbout}
                                style={{marginBottom:20}}
                                key={plant.idPlant}
                                title={plant.plantName}
                                id={plant.idPlant}
                            />
                        )
                    })}
                </RandomPlantsSection>
            </PlantsSection>
        </Container>
    )
}