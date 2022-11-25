import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styled from 'styled-components/native';
import { Like } from './Like';

const Container = styled.View`
    width:100%;
    min-height: 130px;
    background-color:${props => props.theme.cardColor};
    flex-direction:row;
    border-radius: 8px;
    overflow: hidden;
    position:relative;
`

const ImageContainer = styled.View`
    height: 130px;
    width: 115px;
    background-color: ${props => props.theme.cardImageContainer};
    justify-content: center;
`
const Image = styled.Image`
    width: 60%;
    height: 60%;
    align-self: center;
`
const ContentContainer = styled.View`
    flex:1;
    padding-bottom:8px;
    padding-right: 8px;
    padding-left: 12px;
`
const Title = styled.Text`
    font-size:25px;
    font-family: ProximaNovaSemiBold;
    color: ${props => props.theme.title};
    margin-top: 4%;
`
const Description = styled.Text`
    font-size:12px;
    color: ${props => props.theme.text1};
    font-family: Poppins;
    flex:1;
`
const ViewButton = styled.TouchableOpacity`
    border-radius: 16px;
    background-color: ${props => props.theme.blue};
    height:32px;
    width: 110px;
    align-items:center;
    justify-content:center;
    position: absolute;
    bottom: 8px;
    right: 8px;
`
const ViewButtonText = styled.Text`
    color: #ffffff;
    font-size: 14px;
    font-family: Poppins700;
    align-self:center;
`

const LikeContainer = styled.TouchableOpacity`
    position: absolute;
    top:12px;
    right:12px;
`

export function InfoPlantCard({ title, description, image, style, id, liked = false, onLikePressed }) {
    const navigation = useNavigation()

    const [isLiked, setIsLiked] = useState(liked)

    async function handleToggleLiked() {
        setIsLiked(!isLiked)
    }

    async function handleLikePressed() {
        await handleToggleLiked()
        onLikePressed()
    }

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
                <Description
                    numberOfLines={2}
                >
                    {description}
                </Description>
                <ViewButton onPress={() => navigation.navigate('plantInfo', { id: id })}>
                    <ViewButtonText>
                        Ver planta
                    </ViewButtonText>
                </ViewButton>
                <LikeContainer onPress={handleLikePressed}>
                    <Like
                        liked={isLiked}
                    />
                </LikeContainer>
            </ContentContainer>
        </Container>
    )
}