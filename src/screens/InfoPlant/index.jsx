import { Text } from 'react-native'
import styled from 'styled-components/native'

import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { Button } from '../../components/Button'
import { useTheme } from 'styled-components';

const Container = styled.View`
    flex:1;
    justify-content:space-around;
    background-color:${props => props.theme.background1};
`

const Title = styled.Text`
    font-size: 48px;
    color: ${props => props.theme.title};
    font-weight: bold;
`

const HeaderSection = styled.View`
    width: 100%;
    padding-left: 20px;
    flex-direction: row;
    align-items:center;
`
const MidSection = styled.View`
    flex:1;
    flex-direction:row;
    margin-top: 5px;
`
const MidSectionCol1 = styled.View`
    padding-left: 12px;
`
const InfoSquare = styled.View`
    border: 4px solid ${props => props.theme.blue};
    width: 125px;
    height: 125px;
    border-radius: 20px;
    align-items:center;
    margin-bottom: 20px;
`
const InfoSquareText = styled.Text`
    color: ${props => props.theme.text1};
`
const BottomSection = styled.View`
    width: 100%;
    height: 200px;
    justify-content:space-between ;
`
const BottomText = styled.Text`
    color: ${props => props.theme.text2};
    font-size: 20px;
`

function InfoPlant(){
    const themeColors = useTheme()
    return (
        <Container>
            <HeaderSection>
                <Title>Blueberry</Title>
            </HeaderSection>
            <MidSection>
                <MidSectionCol1>
                    <InfoSquare>
                        <Feather name="sun" color={themeColors.blue} size={52} />
                        <InfoSquareText>100%</InfoSquareText>
                    </InfoSquare>
                    <InfoSquare>
                        <Ionicons name="water-outline" color={themeColors.blue} size={52} />
                        <InfoSquareText>100%</InfoSquareText>
                    </InfoSquare>
                    <InfoSquare>
                        <FontAwesome5 name="temperature-high" color={themeColors.blue} size={52} />
                        <InfoSquareText>100%</InfoSquareText>
                    </InfoSquare>
                </MidSectionCol1>
            </MidSection>
            <BottomSection>
                <BottomText>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                </BottomText>
                <Button text="Salvar relatório na nuvem" />
            </BottomSection>
        </Container>
    )
}

export {InfoPlant}