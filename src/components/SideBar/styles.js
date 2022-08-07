import styled from 'styled-components/native'

const ItemContainer = styled.TouchableOpacity`
    background-color: ${props => props.isFocused? 'white' : 'transparent'};
    border-top-right-radius: 48px;
    border-bottom-right-radius: 48px;
    height: 50px;
    flex-flow: row nowrap;
    align-items:center;
    padding-left: 16px;
    width: 90%;
`
const ItemText = styled.Text`
    color:${props => props.isFocused? '#5E6C83' : 'white'};
    font-size: 20px;
    ${props => props.isFocused&& 'font-weight:bold'};
    margin-left: 12px;
`

export {
    ItemContainer,
    ItemText
}