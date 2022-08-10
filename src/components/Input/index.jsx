import styled, {useTheme} from 'styled-components/native'

const Container = styled.View`
    flex-flow: row nowrap;
    height:60px;
    border-radius: 4px;
    padding-right: 2px;
    padding-left: 2px;
    align-items: center;
    background-color: ${props => props.theme.cardColor};
`

const TextInput = styled.TextInput`
    flex:1;
    color: ${props => props.theme.text1};
    font-size: 17px;
    margin-left: 10px;
`

function Input({iconType:Icon, iconName, style, ...textInputProps}){
    const theme = useTheme()

    return (
        <Container style={style}>
            <TextInput
                {...textInputProps}
                placeholderTextColor={theme.text1}
            />
            {Icon &&(
                <Icon name={iconName} size={24} color={theme.text1} style={{marginRight:10}} />
            )}
        </Container>
    )
}

export {Input}