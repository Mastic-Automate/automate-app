import { FlatList, Image, Text } from 'react-native';
import { useTheme } from 'styled-components';
import { BackgroundImage, BackgroundImageContainer, Container, ContentContainer, Description, DescriptionContainer, PropsCard, PropsTitle, Title } from './styles';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDatabasePlants } from '../../hooks/useDatabasePlants';
import { getPlantImage } from './../../global/plants';

function InfoPlant({ route }) {
    const themeColors = useTheme()
    const { data, isLoading } = useDatabasePlants(route.params.id)
    const plantInfo = data[route.params.id]
    const TempIcon = <Feather name="thermometer" size={32} style={{ alignSelf: "center", }} color="#FCFCFC" />
    const HomeIcon = <Ionicons name="home-outline" size={30} style={{ alignSelf: "center", }} color="#FCFCFC" />
    const UmidityIcon = <MaterialCommunityIcons name="water-outline" size={40} style={{ alignSelf: "center", }} color="#FCFCFC" />
    const cardData = [{
        key: 0,
        color: "#55C1AE",
        icon: TempIcon,
        label: "Temperatura",
        value: `${plantInfo.plantTemperature} cº`,
    }, {
        key: 1,
        color: "#C15555",
        icon: HomeIcon,
        label: "Local",
        value: "Jardim",
    },
    {
        key: 2,
        color: "#5581C1",
        icon: UmidityIcon,
        label: "Umidade",
        value: `${plantInfo.plantWaterQuantity}mL/h`,
    }]

    if (!!isLoading) {
        return <Text>Carregando</Text>
    }

    return (<>

        <Container>
            <BackgroundImageContainer>
                <BackgroundImage>
                    <Image
                        source={getPlantImage(plantInfo.idPlant)}
                        style={{ width: 350, height: 350 }}
                    />
                </BackgroundImage>
            </BackgroundImageContainer>
            <ContentContainer>
                <Title>{plantInfo.plantName}</Title>
                <DescriptionContainer>
                    <Description>
                        {plantInfo.plantAbout}
                    </Description>
                </DescriptionContainer>
                <PropsTitle>
                    Propriedades
                </PropsTitle>

                <FlatList
                    data={cardData}
                    renderItem={({ item }) => (
                        <PropsCard
                            color={item.color}
                            icon={item.icon}
                            label={item.label}
                            value={item.value}
                        />
                    )}
                    horizontal={true}
                    style={{ marginLeft: 10 }}
                />

            </ContentContainer>
        </Container>

    </>)
}

export { InfoPlant };

