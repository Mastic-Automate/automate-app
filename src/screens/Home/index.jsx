import { FlatList, View } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { Plant } from '../../components/Plant'
import {InfoPlantCard} from '../../components/InfoPlantCard'
import {Input} from '../../components/Input'

import {
    Container, 
    PlantsSection, 
    PlantsSectionTitle, 
    Title, 
    TopSection, 
    TopPlantImage,
    TopSectionCol1,
    TopSectionCol2,
    RandomPlantsSection
} from './styles'

import {appImages} from '../../global/images'
import { pickRandomPlants } from '../../global/plants'
import { useMemo } from 'react'

export function Home(){
    const randomPlants = useMemo(() => pickRandomPlants(3), [])
    return (
        <Container>
            <TopSection>
                <TopSectionCol1>
                    <Title>A melhor rosa está no seu jardim!</Title>
                </TopSectionCol1>
                <TopSectionCol2>
                    <TopPlantImage 
                        source={appImages['plant1']}
                    />
                </TopSectionCol2>
            </TopSection>
            
            <PlantsSection>
                <Input 
                    iconType={Feather}
                    iconName="search"
                    style={{
                        position:'absolute',
                        top: -25,
                        width: "90%",
                        alignSelf:'center',
                    }}
                    placeholder="Pesquisar"
                />
                <PlantsSectionTitle>
                    Plantas recentes
                </PlantsSectionTitle>
                <FlatList 
                    data={[{variant:'yellow', title:'Amarelo'}, {variant:'red', title:'Vermelho'}, {variant:'blue', title:'Azul'}]}
                    horizontal
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
                                description={plant.description}
                                style={{marginBottom:20}}
                                key={plant.id}
                                title={plant.name}
                                id={plant.id}
                            />
                        )
                    })}
                </RandomPlantsSection>
            </PlantsSection>
        </Container>
    )
}