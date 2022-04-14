import styled from 'styled-components/native';

import YoutubePlayer from 'react-native-youtube-iframe'

const Container = styled.View`
    width: 100%;
    max-width: 450px;
    height: 320px;
    background-color: ${props => props.theme.secondary3};
    margin-bottom: 10px;
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

export default function VideoCard({videoId, videoTitle, videoSubtitle}) {
    return(
        <Container>
            <YoutubePlayer 
                width="100%"
                videoId={videoId}
                height={210}
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

