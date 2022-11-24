import styled from "styled-components/native"
import {Ionicons} from '@expo/vector-icons'

const TitlebarContainer = styled.View`
    width: 100%;
    height: 8%;
    background-color: ${props => props.theme.background};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
`
const TitlebarText = styled.Text`
    font-size: 24px;
    height: 40%;
    font-family: ProximaNovaSemiBold;
    align-self: center;
    
`

const TitlebarIcon = ({navigation, opacity, screen}) => (
    <Ionicons 
                name="chevron-back"
                color="#000"
                size={27}
                onPress={()=> navigation.goBack()}
                style={{margin:10, marginLeft:25, opacity: opacity}}
            />)

export const Titlebar = ({navigation, title, style}) => {
    return (
        <TitlebarContainer style={style}>
            <TitlebarIcon navigation={navigation} opacity={1} />
            <TitlebarText>{title?title:""}</TitlebarText>
            <TitlebarIcon opacity={0}/>
        </TitlebarContainer>
    )
}