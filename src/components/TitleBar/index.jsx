import { Ionicons } from '@expo/vector-icons'
import styled, { useTheme } from "styled-components/native"

const TitlebarContainer = styled.View`
    width: 100%;
    height: 60px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const TitlebarText = styled.Text`
    font-size: 24px;
    height: 40%;
    font-family: ProximaNovaSemiBold;
    align-self: center;
    color: ${props => props.theme.title};
`

const TitlebarIcon = ({ navigation, opacity, screen, name = "chevron-back", exe, colors }) => (
    <Ionicons
        name={name}
        color={colors}
        size={27}
        onPress={exe}
        style={{ margin: 10, marginLeft: 25, opacity: opacity}}
    />
)
export const Titlebar = ({ navigation, title = "", style, iconName = "chevron-back", exe, rightIcon = null }) => {

    const theme = useTheme();

    return (
        <TitlebarContainer style={style} >
            <TitlebarIcon navigation={navigation} name={iconName} exe={exe} opacity={1} colors={theme.text2} />
            <TitlebarText>{title}</TitlebarText>
            {rightIcon ? rightIcon : <TitlebarIcon opacity={0} colors={theme.text2}/>}
        </TitlebarContainer>
    )
}