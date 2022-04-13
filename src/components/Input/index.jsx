import {useState} from 'react'

import styled, {useTheme} from 'styled-components/native'

const Container = styled.View`
    flex-flow: row nowrap;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    background-color: ${props =>props.isFocused? 'transparent' : props.theme.secondary3};
    border: ${props => props.isFocused? '2px' : '2px'} solid ${props => props.isFocused? props.theme.primary : props.theme.secondary3};
`

const TextInput = styled.TextInput`
    flex:1;
    color: ${props => props.theme.secondary1};
    font-size: 20px;
    margin-left: 10px;
`

function Input({iconType:Icon, iconName, style, ...textInputProps}){
    const [isFocused, setIsFocused] = useState(false)
    const theme = useTheme()

    return (
        <Container isFocused={isFocused} style={style}>
            {Icon &&(
                <Icon name={iconName} size={40} color={isFocused? theme.primary : theme.secondary1} />
            )}
            <TextInput
                {...textInputProps} 
                onFocus={()=> setIsFocused(true)} 
                onBlur={()=> setIsFocused(false)}
            />
        </Container>
    )
}

export {Input}