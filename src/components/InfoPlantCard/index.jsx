import styled from 'styled-components/native'

const Container = styled.View`
    width:100%;
    height: 130px;
    background-color:${props => props.theme.cardColor};
    flex-direction:row;
    border-radius: 8px;
    padding-right:8px;
    padding-bottom:8px;
`

const ImageContainer = styled.View`
    height: 100%;
    width: 150px;
`
const Image = styled.Image`
    width: 100%;
    height: 100%;
`
const ContentContainer = styled.View`
    flex:1;
    justify-content:space-between ;
`
const Title = styled.Text`
    font-size:28px;
    font-weight:bold;
    color: ${props => props.theme.title};
`
const Description = styled.Text`
    font-size:12px;
    color: ${props => props.theme.text1};
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
    font-weight: bold;
`

export function InfoPlantCard({title, description, image, style}){
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
                <Description>
                    {description}
                </Description>
                <ViewButton>
                    <ViewButtonText>
                        Ver planta
                    </ViewButtonText>
                </ViewButton>
            </ContentContainer>

        </Container>
    )
}