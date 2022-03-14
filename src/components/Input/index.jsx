import styled from 'styled-components/native'

const Container = styled.View`
    flex-flow: row nowrap;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    gap: 10px;
    background-color: ${props => props.theme.secondary3};
`

const TextInput = styled.TextInput`
    flex:1;
    outline-width: 0px;
`

function Input({Icon, ...textInputProps}){
    return (
        <Container>
            {Icon && <Icon />}
            <TextInput {...textInputProps} />
        </Container>
    )
}

export {Input}