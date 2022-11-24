import { Feather } from '@expo/vector-icons'
import { FlatList, Image } from 'react-native'
import { InfoPlantCard } from '../../components/InfoPlantCard'
import { Input } from '../../components/Input'
import { Plant } from '../../components/Plant'

const sol = require("../../assets/temperature.png");

import {
    Container, FilterButton, InputsRow, PlantsSection,
    PlantsSectionTitle, RandomPlantsSection, Title, TopMessage, TopMessageContainer,
    TopPlantImage, TopSection, TopSectionCol1,
    TopSectionCol2
} from './styles'

import { useMemo } from 'react'
import { useDatabasePlants } from '../../contexts/DatabasePlantsContext'
import { appImages } from '../../global/images'
import { getPlantImage } from '../../global/plants'
import { useMicrocontrollers } from '../../hooks/useMicrocontrollers'

export function Home({ navigation }) {
    const { pickRandomPlants, databasePlants } = useDatabasePlants()
    const randomPlants = useMemo(() => pickRandomPlants(3), [databasePlants])

    const { storedDevices } = useMicrocontrollers()
    return (
        <Container>
            <TopSection>
                <TopSectionCol1>
                    <Title>
                        {`A Melhor rosa \n`}
                        {`está no seu Jardim!`}
                    </Title>
                    <TopMessageContainer>
                        <TopMessage>
                            Bom dia, 27°
                        </TopMessage>
                        <Image
                            source={sol}
                            width={0.1}
                            height={0.1}
                            style={{ width: 25, height: 25, alignSelf: 'center', margin: 0, top: -2 }}
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
                            width: '77%',
                            backgroundColor: "#FFFFFF",

                        }}
                        placeholder="Pesquisar"
                        placeholderColor="#FFFFFF"
                    />
                </InputsRow>

                <PlantsSectionTitle>
                    Plantas Recentes
                </PlantsSectionTitle>
                <FlatList
                    data={storedDevices.map(device => {
                        return {
                            title: device.name,
                            databaseId: device.databaseId,
                            id: device.id
                        }
                    })}
                    horizontal
                    contentContainerStyle={{
                        marginLeft: 12,
                        paddingRight: 24,
                    }}
                    renderItem={({ item }) => {
                        return (
                            <Plant
                                {...item}
                                variant="yellow"
                                image={getPlantImage(item.databaseId)}
                                subtitle="Sub"
                                onPress={() => navigation.navigate('plantsManagement', { screen:'connect-plant', params: {id: item.id} })}
                            />
                        )
                    }}
                    keyExtractor={(data) => data.id}
                    showsHorizontalScrollIndicator={false}
                />
                <RandomPlantsSection>
                    {randomPlants.map(plant => {
                        if (!!plant) {
                            return (
                                <InfoPlantCard
                                    image={plant.image}
                                    description={plant.plantAbout}
                                    style={{ marginBottom: 20 }}
                                    key={plant.idPlant}
                                    title={plant.plantName}
                                    id={plant.idPlant}
                                />
                            )
                        }
                    })}
                </RandomPlantsSection>
            </PlantsSection>
        </Container>
    )
}