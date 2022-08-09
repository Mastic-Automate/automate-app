import styled, { useTheme } from 'styled-components/native'

function getButtonBackgroundColor(props) {
    if (props.outline) {
        return 'transparent'
    } else if (props.negative) {
        return '#FF5959'
    } else {
        return props.theme.primary
    }
}

const Container = styled.TouchableOpacity`
    background-color: ${props => getButtonBackgroundColor(props)};
    border: 1px solid ${props => props.outline ? props.theme.secondary2 : 'transparent'};
    border-radius: 35px;
    flex-flow: row nowrap;
    align-items:center;
    height: 70px;
`

const Text = styled.Text`
    color: ${props => props.outline ? props.theme.secondary2 : '#ffffff'};
    font-family: ProximaNova;
    font-size: 24px;
    flex:1;
    text-align: center;
`

export function Button({ text, iconName, iconType: Icon, outline, ...buttonProps }) {
    const theme = useTheme()
    return (
        <Container {...buttonProps} outline={outline}>
            {Icon && (

                <Icon
                    name={iconName}
                    size={40}
                    color={outline ? theme.secondary2 : '#ffffff'}
                />
            )}
            <Text outline={outline}>{text}</Text>
        </Container>
    )
}