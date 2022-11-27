import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, ContentContainer, Description, PropsCard, PropsTitle, Title } from './styles';
import { Feather } from '@expo/vector-icons';

function InfoPlant({ route }) {
    const themeColors = useTheme()
    //const {data, isLoading} = useDatabasePlant(route.params.id)
    // const plantInfo = data
    const TempIcon = <Feather name="thermometer" size={32} style={{ alignSelf: "center", }} color="#FCFCFC" />

    const cardData = [{
        color: "#55C1AE",
        icon: TempIcon,
        label: "",
        value: "",
    }, {
        color: "#55C1AE",
        icon: TempIcon,
        label: "",
        value: "",
    },
    {
        color: "#55C1AE",
        icon: TempIcon,
        label: "",
        value: "",
    }]


    return (

        <Container>
            <ContentContainer>
                <Title>Blueberry</Title>
                <Description>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </Description>

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
                />

                {/* <PropsCard /> */}
            </ContentContainer>
        </Container>

    )
}

export { InfoPlant };

