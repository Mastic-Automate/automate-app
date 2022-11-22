import { Feather, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { useMemo } from 'react'
import { FlatList, Image } from 'react-native'
import { useTheme } from 'styled-components'
import { InfoPlantCard } from '../../components/InfoPlantCard'
import { Input } from '../../components/Input'
import { Plant } from '../../components/Plant'
import { Titlebar } from '../../components/TitleBar'
import { useDatabasePlants } from '../../contexts/DatabasePlantsContext'
import { appImages } from '../../global/images'
import {
    Container, FilterButton, InputsRow, PlantsSection,
    PlantsSectionTitle, RandomPlantsSection, Title, TopMessage, TopMessageContainer,
    TopPlantImage, TopSection, TopSectionCol1,
    TopSectionCol2
} from './styles'

const sol = require("../../assets/temperature.png");



export function Home({ navigation }) {

    const theme = useTheme()

    const openDrawer = () => navigation.openDrawer();
    const configIcon =
        <Ionicons
            name="settings-outline"
            color={theme.text2}
            size={35}
            onPress={() => navigation.replace('authRoutes', { screen: 'config' })}
            style={{ margin: 10, marginRight: 20 }}
        />

    return (<>
        <StatusBar
            backgroundColor={theme.background}
            animated={true}
            hideTransitionAnimation={true}
            translucent={true}
        />

        <Titlebar
            navigation={navigation}
            title="Automate"
            rightIcon={configIcon}
            exe={openDrawer}
            iconName="menu-outline"
            style={{
                backgroundColor: theme.background1
            }}
        />
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
                    data={[
                        { variant: 'yellow', title: 'Amarelo' },
                        { variant: 'red', title: 'Vermelho' },
                        { variant: 'blue', title: 'Azul' }
                    ]}
                    horizontal
                    contentContainerStyle={{
                        marginLeft: 12,
                        paddingRight: 24,
                    }}
                    renderItem={({ item }) => {
                        return (
                            <Plant
                                {...item}
                                image={appImages['plant1']}
                                subtitle="Sub"
                            />
                        )
                    }}
                    keyExtractor={(data) => data.title}
                    showsHorizontalScrollIndicator={false}
                />
                {/* <RandomPlantsSection>
                    {randomPlants.map(plant => {
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
                    })}
                </RandomPlantsSection> */}
            </PlantsSection>
        </Container>
    </>
    )
}