import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, ContentContainer, Description, PropsCard, PropsTitle, Title } from './styles';


function InfoPlant({ route }) {
    const themeColors = useTheme()
    //const {data, isLoading} = useDatabasePlant(route.params.id)
    // const plantInfo = data


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

                {/* <FlatList 
                data={}
                renderItem
                /> */}

                <PropsCard />
            </ContentContainer>
        </Container>

    )
}

export { InfoPlant };

