import styled, { useTheme } from 'styled-components/native'

const variants = {
    'default': {
        bg:'#009D81',
        color: '#ffffff'
    },
    'negative': {
        bg:'#FF5959',
        color:'#ffffff'
    },
    'blue': {
        bg: '#68D1DF',
        color:'#000744'
    }
}

const Container = styled.TouchableOpacity`
    background-color: ${props => props.bg};
    border: 1px solid ${props => props.outline ? props.theme.title : 'transparent'};
    border-radius: 35px;
    flex-flow: row nowrap;
    align-items:center;
    height: 60px;
    width: 277px;
    align-self: center;
`

const Text = styled.Text`
    color: ${props => props.color};
    font-family: ProximaNova;
    font-size: 24px;
    flex:1;
    text-align: center;
`

export function Button({ text, iconName, iconType: Icon, outline, variant='default', ...buttonProps }) {
    const theme = useTheme()
    const {bg, color} = variants[variant]
    return (
        <Container {...buttonProps} bg={bg}>
            {Icon && (

                <Icon
                    name={iconName}
                    size={40}
                    color={outline ? theme.title : '#ffffff'}
                />
            )}
            <Text color={color}>{text}</Text>
        </Container>
    )
}