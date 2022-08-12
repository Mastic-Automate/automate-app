import styled from 'styled-components/native'

const Container = styled.View`
    flex-flow: column nowrap;
    align-items:center;
    height: 300px;
    width: 230px;
    background-color: ${props => props.active ? props.theme.purple : props.theme.cardColor };
    border-radius:16px;
`
const Name = styled.Text`
    font-size:28px;
    color: ${props => props.active? 'white' : props.theme.title};
`
const Subtitle = styled.Text`
    font-size:16px;
    color: ${props => props.active? 'white' : props.theme.subtitle};
`
const Image = styled.Image`
    width:200px;
`

export function CarouselCard({name, sub, img, active}){
    return (
        <Container active={active}>
            <Name active={active}>
                {name}
            </Name>
            <Subtitle 
                active={active}
                numberOfLines={1}
            >
                {sub}
            </Subtitle>
            <Image 
                source={img}
            />
        </Container>
    )
}