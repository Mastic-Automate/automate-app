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
import { useMicrocontrollers } from '../../hooks/useMicrocontrollers' 
import { getPlantImage } from '../../global/plants'

export function Home(){
    const {pickRandomPlants} = useDatabasePlants()
    const randomPlants = useMemo(() => pickRandomPlants(3), [])
    const {storedDevices} = useMicrocontrollers()
    return (
        <Container>
            <TopSection>
                <TopSectionCol1>
                    <Title>
                        {`A Melhor rosa \n`} 
                        {`está no seu jardim!`}
                    </Title>
                    <TopMessageContainer>
                        <TopMessage>
                            Bom dia, 27°
                        </TopMessage>
                        <Feather 
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
                        <Feather 
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
                    data={storedDevices.map(device => {
                        return {
                            title: device.name,
                            databaseId: device.databaseId
                        }
                    })}
                    horizontal
                    contentContainerStyle={{
                        marginLeft: 10
                    }}
                    renderItem={({item}) => {
                        return (
                            <Plant 
                                {...item}
                                variant="yellow"
                                image={getPlantImage(item.databaseId)}
                                subtitle="Sub"
                            />
                        )
                    }}
                    keyExtractor={(data)=> data.databaseId}
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