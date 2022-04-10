import styled from 'styled-components/native'

import {Text} from 'react-native'
import VideoCard from '../../components/VideoCard'

const Container = styled.View`
    background-color: ${props => props.theme.background};
    flex: 1;
    align-items:center;
    padding-top: 20px;
`

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
`

const VideosContainer = styled.View`
    width: 100%;
    margin-top: 32px;
    justify-content: center;
    align-items: center;
`;

export function Videos(){
    return (
        <Container>
            <Title>Videos</Title>
            <VideosContainer>
                <VideoCard
                    urlVideoThumb='https://images.unsplash.com/photo-1608022749628-3251d92cdd79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    videoTitle='Como lavar tomates recém colhidos'
                    videoSubtitle='Luíz Antônio Braga'
                />
            </VideosContainer>
        </Container>
    )
}