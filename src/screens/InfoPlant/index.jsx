import { FlatList, Image, Text } from 'react-native';
import { useTheme } from 'styled-components';
import { BackgroundImage, BackgroundImageContainer, Container, ContentContainer, Description, DescriptionContainer, FavIconContainer, PropsCard, PropsTitle, Title } from './styles';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDatabasePlant } from '../../hooks/useDatabasePlant'
import { getPlantImage } from './../../global/plants';
import { useState, useMemo } from 'react';

const TempIcon = <Feather name="thermometer" size={32} style={{ alignSelf: "center", }} color="#FCFCFC" />
const HomeIcon = <Ionicons name="home-outline" size={30} style={{ alignSelf: "center", }} color="#FCFCFC" />
const UmidityIcon = <MaterialCommunityIcons name="water-outline" size={40} style={{ alignSelf: "center", }} color="#FCFCFC" />

function InfoPlant({ route }) {
    const { data, isLoading } = useDatabasePlant(route.params.id)
    const plantInfo = data
    const [heart, setHeart] = useState("heart-outline");

    const cardData = useMemo(() => {
        if (!!plantInfo) {
            return [
                {
                    key: 1,
                    color: "#C15555",
                    icon: HomeIcon,
                    label: "Local",
                    value: "Jardim",
                },
                {
                    key: 0,
                    color: "#55C1AE",
                    icon: TempIcon,
                    label: "Temperatura",
                    value: `${plantInfo.plantTemperature} cº`,
                },
                {
                    key: 2,
                    color: "#5581C1",
                    icon: UmidityIcon,
                    label: "Umidade",
                    value: `${plantInfo.plantWaterQuantity}mL/h`,
                }
            ]
        }
        return []
    }, [plantInfo])

    if (!!isLoading) {
        return <Text>Carregando</Text>
    }

    return (
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
                <FavIconContainer onPress={() => { heart == "heart-outline" ? setHeart("heart-sharp") : setHeart("heart-outline") }} >
                    <Ionicons name={heart} size={40} style={{ zIndex: 100 }} color="white" />
                </FavIconContainer>
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
                    style={{ paddingLeft: 10, paddingRight: 10, alignContent: 'center', justifyContent: 'center', }}
                />

            </ContentContainer>
            <Text>AAA</Text>
        </Container>
    )
}

export { InfoPlant };

