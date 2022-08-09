import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components'

const Container = styled.View`
    width:192px;
    height:350px;
    padding:10px;
    background-color: ${props => props.theme.cardColor};
    border-radius: 24px;
`
const ImageContainer = styled.View`
    width:100%;
    height: 170px;
    background-color: ${props => props.theme.lightBlue};
    border-radius:12px ;
    justify-content:center;
    align-items:center;
`
const Image = styled.Image`
    width:110px;
    height:110px;
`
const InfoContainer = styled.View`
    flex:1;
    justify-content:space-between;
`
const PlantNameText = styled.Text`
    color: ${props => props.theme.title};
    font-size: 28px;
    font-family: ProximaNova;
`
const PlantDescriptionText = styled.Text`
    color: ${props => props.theme.text1};
    font-size:18px;
    font-family: Montserrat_500Medium;
`
const PlantViewButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.lightBlue};
    border-radius: 24px;
    height: 40px;
    align-items:center;
    justify-content:center;
`
const PlantViewButtonText = styled.Text`
    color: ${props => props.theme.darkBlue};
    font-size: 18px;
    font-family: ProximaNova;
`

export function PlantCard({name, id, description, image, style}){
    const navigation = useNavigation()
    return (
        <Container style={style}>
            <ImageContainer>
                <Image 
                    source={image}
                />
            </ImageContainer>
            <InfoContainer>
                <PlantNameText>
                    {name}
                </PlantNameText>
                <PlantDescriptionText>
                    {description}
                </PlantDescriptionText>
                <PlantViewButton onPress={()=> navigation.navigate('plantInfo', {id: id})}>
                    <PlantViewButtonText>
                        Detalhes
                    </PlantViewButtonText>
                </PlantViewButton>
            </InfoContainer>
        </Container>
    )
}