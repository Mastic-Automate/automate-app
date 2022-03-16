import styled, {useTheme} from 'styled-components/native'

const Container = styled.TouchableOpacity`
    background-color: ${props => props.outline? 'transparent' : props.theme.primary};
    border: 1px solid ${props => props.outline? props.theme.secondary2 : 'transparent'};
    border-radius: 10px;
    padding: 10px;
    flex-flow: row nowrap;
    align-items:center;
`

const Text = styled.Text`
    color: ${props => props.outline? props.theme.secondary2 : '#ffffff'};
    font-weight: bold;
    font-size: 20px;
    flex:1;
    text-align: center;
`

export function Button({text, iconName, iconType: Icon, outline, ...buttonProps}){
    const theme = useTheme()
    return (
        <Container {...buttonProps} outline={outline}>
            {Icon && (

                <Icon
                    name={iconName}
                    size={40}
                    color={outline? theme.secondary2: '#ffffff'}
                />
            )}
            <Text outline={outline}>{text}</Text>
        </Container>
    )
}