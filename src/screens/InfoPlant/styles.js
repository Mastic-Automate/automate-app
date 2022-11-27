import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

const Container = styled.View`
    flex: 1;
    background-color: #5EDAF5;
    flex-direction: column-reverse;
`

const ContentContainer = styled.View`
    background-color: white;
    width: 100%;
    height: 63%;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    `

const Title = styled.Text`
    font-family: 'Supera Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 55px;
    margin-left: 10%;
    margin-top: 25px;
    color: #292929;
    `

const Description = styled.Text`
font-style: normal;
margin-left: 10%;
margin-top:25px;
font-weight: 400;
font-size: 16px;
line-height: 25px;
font-family: 'Poppins';
/* CardColor/[night] */

color: #343434;
width:300px;

    `

const PropsTitle = styled.Text`
    width: 329px;
    height: 41px;
    margin-left: 10%;
    margin-top: 25px;
    font-family: 'Poppins500';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 48px;
    color: #292929;
    `

const PropsCardContainer = styled.View`
    height: 211px;
    margin-left: 19px;
    margin-top: 5%;
    background: ${props => props.color};
    border-radius: 18px;
    width: 168px;
`
const CardIconContainer = styled.View`
height: 45px;
margin-left: 16px;
margin-top: 16px;
width: 45px;
background: rgba(252, 252, 252, 0.59);
border-radius: 10px;
justify-content: center;
`
const PropsLabel = styled.Text`
    height: 24px;
    width: 129px;
    margin-left: 16px;
    font-family: 'ProximaNovaSemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #F5F5F5;
`
const PropsValue = styled.Text`
    margin-left: 16px;
font-family: 'MusticaPro';
font-style: normal;
font-weight: 600;
font-size: 34px;
line-height: 44px;
color: #FFFFFF;

`

const PropsCard = ({ style, color, icon, label, value }) => {

    return (
        <PropsCardContainer color={color}>
            <CardIconContainer>
                {icon}
            </CardIconContainer>
            <View style={{ flexDirection: 'column-reverse', flex: 1, marginBottom: 28, }}>
                <PropsValue>{value}</PropsValue>
                <PropsLabel>{label}</PropsLabel>
            </View>
        </PropsCardContainer>
    )
}
export { Container, ContentContainer, Title, Description, PropsTitle, PropsCard }