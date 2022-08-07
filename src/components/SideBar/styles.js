import styled from 'styled-components/native'

const BarContainer = styled.View`
    height: 100%;
`

const TopSection = styled.View`
    height: 160px;
    width: 100%;
`

const TopImage = styled.Image`
    width: 100%;
    height: 160px;
    margin: 10px;
`
const MainSection = styled.View`
    flex:1;
    width: 100%;
`
const ItemContainer = styled.TouchableOpacity`
    background-color: ${props => props.isFocused? 'white' : 'transparent'};
    border-top-right-radius: 48px;
    border-bottom-right-radius: 48px;
    height: 50px;
    flex-flow: row nowrap;
    align-items:center;
    padding-left: 16px;
    width: 90%;
    margin-bottom: 10px;
`
const BottomSection = styled.TouchableOpacity`
    background-color: ${props => props.theme.purple};
    width: 100%;
    height: 100px;
    border-top-right-radius:40px;
    flex-flow: row nowrap;
    align-items:center;
    justify-content:space-between;
    padding-left:15px;
    padding-right:15px;
`
const BottomText = styled.Text`
    color: white;
    font-size: 24px;
    font-weight:bold;
`
const BottomProfilePicture = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`

const ItemText = styled.Text`
    color:${props => props.isFocused? '#5E6C83' : 'white'};
    font-size: 20px;
    ${props => props.isFocused&& 'font-weight:bold'};
    margin-left: 12px;
`

export {
    BarContainer,
    ItemContainer,
    ItemText,
    TopImage,
    BottomSection,
    BottomProfilePicture,
    BottomText,
    MainSection,
    TopSection
}