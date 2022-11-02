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



export const Titlebar = ({navigation, title = "", style, iconName = "chevron-back", exe, rightIcon = null}) => {

const defBack = () => navigation.goBack();

   const TitlebarIcon = ({navigation, opacity, screen, name = "chevron-back", exe = defBack}) => (
    <Ionicons 
                name={name}
                color="#000"
                size={27}
                onPress={exe}
                style={{margin:10, marginLeft:25, opacity: opacity}}
            />)


    return (
        <TitlebarContainer style={style}>
            <TitlebarIcon navigation={navigation} name={iconName} exe={exe} opacity={1} />
            <TitlebarText>{title}</TitlebarText>
            {rightIcon? rightIcon :<TitlebarIcon opacity={0}/>}
        </TitlebarContainer>
    )
}