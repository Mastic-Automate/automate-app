import styled from 'styled-components/native'
import { TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';



const Container = styled.View`
    flex:1;
`
    

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 55px;
    width:100%;
    text-align:center;
    margin-top: 95px;
    font-family:Montserrat_600SemiBold;
    color: #163345;
`

const InputsContainer = styled.View`
    width:100%;
 
`
const InputLabel = styled.Text`
    color: ${props => props.theme.secondary1};
    font-size: 20px;
`
const DetailSection = styled.View`
    width: 100%;
    background-color: ${props => props.theme.background2};
    align-items: center;
    flex-direction: column;

    border-top-left-radius:60px;

`
const DetailSectionTitle = styled.Text`
    font-size:20px;
    font-family:Poppins700;
    width:100%;
    text-align:center;
    color: ${props => props.theme.title};
    margin-bottom: 20px;
    margin-top: 20px;
`
const DetailRowLabel = styled.Text`
    color: ${props => props.theme.title};
    font-size: 20px;
    font-family: actor;
`
const DetailRowValue = styled.Text`
    color: ${props => props.theme.text2};
    font-size: 20px;
    font-family: Oswald200;
`
const DetailRowContainer = styled.View`
    flex-flow: row nowrap;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 10px;
    width: 91%;
`
const DetailRow = ({label, value}) => {
    return (
        <DetailRowContainer>
            <DetailRowLabel>
                {label}
            </DetailRowLabel>
            <DetailRowValue>
                {value}
            </DetailRowValue>
        </DetailRowContainer>
    )
}

const BottomButtonsContainer = styled.View`
    flex-direction:row;
`
const DivImage = styled.View`
    flex:1;
    width:100%;
    height:100%;
    align-items: center;
    justify-content: space-between;

`

const NameInput = styled.TextInput`
    width: 361px;
    height: 68px;
    background-color: #D7DCE0;
    border-radius: 37px;
    margin-bottom: 20px;
    border-width: 2px;
    border-color: #164768;
    color: #164768;
    padding-left: 32px;
    font-size: 20px;
    font-family: Poppins600;
    align-items: center;
    flex-direction: row;
`

export { 
    Container, 
    Title, 
    InputsContainer, 
    InputLabel, 
    BottomButtonsContainer,
    DetailRow,
    DetailRowContainer,
    DetailSection,
    DetailSectionTitle,
    DivImage,
    NameInput
}