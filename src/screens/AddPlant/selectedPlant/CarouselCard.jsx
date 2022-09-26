import styled from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient';

const Container = styled.View`
    flex-flow: column nowrap;
    align-items:center;
    height: 306px;
    width: 226px;
    border-radius:10px;
    
`

const Frame = styled.View`
    align-items:center;
    justify-content: center;
    height: 320px;
    width: 240px;
    border-color: ${props=> props.active?`#1DBF37`:`#ffffff`};
    border-radius:18px;
    border-width:3px;

`
const Name = styled.Text`
    font-size:28px;
    color: #000;
    font-family: Montserrat_600SemiBold;
    font-size: 24px;
    margin-top: 13px;
`
const Subtitle = styled.Text`
    font-size:15px;
    color: #000;
    font-family: Montserrat_400Regular;
    margin-right: 10%;
    margin-left:10%;
    
`
const Image = styled.Image`
    margin-top:20%
    width:200px;
`

export function CarouselCard({name, sub, img, active}){
    return (
        <Frame active={active}>
        <LinearGradient 
        colors={active?
            ['rgba(163, 183, 195, 0.36)', 'rgba(69, 116, 122, 0.86)']
            :
            ['rgba(49, 49, 49, 0.36)', 'rgba(49, 49, 49, 0.36)']
        }
        style={{alignItems:'center', flexDirection:'row', borderRadius:10}}
        >
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
            </LinearGradient>   
            </Frame>
    )
}