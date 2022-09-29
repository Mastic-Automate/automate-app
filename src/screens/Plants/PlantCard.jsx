import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

const Container = styled.View`
    width:192px;
    height:293px;
    background-color: #FFFFFF;
    border-radius: 24px;
    
    margin-right:24px;
`
const ImageContainer = styled.View`
    width:171px;
    height: 142px;
    background-color: ${props => props.theme.lightBlue};
    border-radius:12px ;
    justify-content:center;
    align-items:center;
    margin: 10px auto;
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
    color: #103551;
    font-size: 28px;
    font-family: ProximaNova;
    margin-left:15px;
    margin-right: 15px;
    max-height: 34px;
`
const PlantDescriptionText = styled.Text`
    color: ${props => props.theme.text1};
    font-size:18px;
    font-family: Montserrat_400Regular;
    margin-left:15px;
    margin-right: 15px;
`
const PlantViewButton = styled.TouchableOpacity`
    width:162px;
    background-color: #D7E1E8;
    border-radius: 24px;
    height: 40px;
    align-items:center;
    justify-content:center;
    margin-bottom: 12px;
    margin-top: 15px;
    margin-right: 15px;
    margin-left: 15px;
`
const PlantViewButtonText = styled.Text`
    color: ${props => props.theme.darkBlue};
    font-size: 18px;
    font-family: ProximaNova;
`

const AlignHelper = styled.View`
    width:100%;
    align-items: center;
    flex-direction: column;
`

export function PlantCard({name, id, description, image, style}){
    const navigation = useNavigation()
    return (
        <Container style={{...style, 
            shadowColor:"#4F5C66",
            shadowOffset: {width:0, height: 12},
            shadowOpacity: 0.29,
            shadowRadius: 10.00,
            elevation: 20,
            marginBottom: 40,
        }}>
            <ImageContainer>
                <Image 
                    source={image}
                />
            </ImageContainer>
            <InfoContainer>
                <PlantNameText>
                    {name}
                </PlantNameText>
                <PlantDescriptionText
                    numberOfLines={1}
                >
                    {description}
                </PlantDescriptionText>
                <AlignHelper>
                <PlantViewButton onPress={()=> navigation.navigate('plantInfo', {id: id})}>
                    <PlantViewButtonText>
                        Detalhes
                    </PlantViewButtonText>
                </PlantViewButton>
                </AlignHelper>
            </InfoContainer>
        </Container>
    )
}