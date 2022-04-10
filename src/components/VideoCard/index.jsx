import styled, {useTheme} from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    max-width: 450px;
    height: 320px;
    background-color: ${props => props.theme.secondary3};
    margin-bottom: 10px;
`;

const VideoThumb = styled.Image`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const InfoContainer = styled.View`
    margin: 10px 20px;
`;

const Title = styled.Text`
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.theme.subtitle};
`;

const Subtitle = styled.Text`
    font-weight: 400;
    font-size: 15px;
    color: ${props => props.theme.secondary1};
    margin-top: 12px;
`;

export default function VideoCard({urlVideoThumb, videoTitle, videoSubtitle}) {
    return(
        <Container>
            <VideoThumb
                source={{uri: urlVideoThumb }}
            />
            <InfoContainer>
                <Title>
                    {videoTitle}
                </Title>
                <Subtitle>
                    {videoSubtitle}
                </Subtitle>
            </InfoContainer>
            
        </Container>
    )
}

