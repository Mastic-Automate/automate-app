import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

const Container = styled.View`
    width:100%;
    min-height: 130px;
    background-color:${props => props.theme.cardColor};
    flex-direction:row;
    border-radius: 8px;
    overflow: hidden;
`

const ImageContainer = styled.View`
    height: 130px;
    width: 130px;
    background-color: ${props => props.theme.cardImageContainer};
`
const Image = styled.Image`
    width: 100%;
    height: 100%;
`
const ContentContainer = styled.View`
    flex:1;
    justify-content:space-between;
    padding-bottom:8px;
    padding-right: 8px;
    padding-left: 12px;
`
const Title = styled.Text`
    font-size:28px;
    font-family: Poppins700;
    color: ${props => props.theme.title};
`
const Description = styled.Text`
    font-size:12px;
    color: ${props => props.theme.text1};
    font-family: Poppins;
`
const ViewButton = styled.TouchableOpacity`
    border-radius: 16px;
    background-color: ${props => props.theme.blue};
    height:32px;
    width: 110px;
    align-items:center;
    justify-content:center;
    align-self:flex-end;
`
const ViewButtonText = styled.Text`
    color: #ffffff;
    font-size: 15px;
    font-family: Poppins700;
`
const BottomView = styled.View`
    flex-flow: row nowrap;
    flex:1;
    justify-content: space-between;
`

export function InfoPlantCard({title, description, image, style, id}){
    const navigation = useNavigation()
    return (
        <Container style={style}>
            <ImageContainer>
                <Image 
                    source={image}
                />
            </ImageContainer>
            <ContentContainer>
                <Title>
                    {title}
                </Title>
                <BottomView>
                    <Description>
                        {description}
                    </Description>
                    <ViewButton onPress={()=> navigation.navigate('plantInfo', {id:id})}>
                        <ViewButtonText>
                            Ver planta
                        </ViewButtonText>
                    </ViewButton>
                </BottomView>
            </ContentContainer>

        </Container>
    )
}