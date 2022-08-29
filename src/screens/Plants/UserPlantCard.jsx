import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
    background-color: ${props => props.theme.cardColor};
    border-radius: 24px;
    padding: 10px;
    flex-flow: row nowrap;
    width: 300px;
    height: 120px;
    margin-left:12px;
    margin-right:12px;
`
const ImageContainer = styled.View`
    width: 100px;
    height: 100px;
    background-color: ${props => props.theme.lightYellow};
    border-radius: 16px;
    overflow: hidden;
    justify-content:center ;
    align-items:center;
`
const Image = styled.Image`
    width: 100%;
    height: 100%;
`
const InfoContainer = styled.View`
    flex:1;
    margin-left:10px;
`
const PlantNameText = styled.Text`
    color: ${props => props.theme.title};
    font-size: 24px;
    font-family: SuperaGothic;
`
const PlantDescriptionText = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.text1};
    font-family: Montserrat_500Medium;
`

export function UserPlantCard({name, description, image, id, style}) {
    return (
        <Container style={{...style, 
            shadowColor:"#4F5C66",
            shadowOffset: {width:100, height:100},
            shadowOpacity: 0.11,
            elevation: 5,
            marginBottom:15,
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
                <PlantDescriptionText>
                    {description}
                </PlantDescriptionText>
            </InfoContainer>
        </Container>
    )
}