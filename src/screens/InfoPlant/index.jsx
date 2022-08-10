import { Text } from 'react-native'
import styled from 'styled-components/native'

import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import {
    BottomSection,
    BottomText,
    Container,
    HeaderSection,
    InfoSquare,
    InfoSquareText,
    MidSection,
    MidSectionCol1,
    MidSectionCol2,
    PlantImage,
    Title,
    BottomSectionTitle,
    RightSection,
} from './styles'
import { getPlantInfo } from '../../global/plants';
import { useMemo } from 'react';

function InfoPlant({route}){
    const themeColors = useTheme()
    const plantInfo = useMemo(() => getPlantInfo(route.params.id), [route.params.id])
    return (
        <Container>
            <HeaderSection>
                <Title style={{marginTop: 12}}>{plantInfo.name}</Title>
            </HeaderSection>
            <MidSection>
                <MidSectionCol1>
                    <InfoSquare>
                        <Feather name="sun" color={themeColors.background2} size={52} />
                        <InfoSquareText>100%</InfoSquareText>
                    </InfoSquare>
                    <InfoSquare>
                        <Ionicons name="water-outline" color={themeColors.background2} size={52} />
                        <InfoSquareText>100%</InfoSquareText>
                    </InfoSquare>
                    <InfoSquare>
                        <FontAwesome5 name="temperature-high" color={themeColors.background2} size={52} />
                        <InfoSquareText>100%</InfoSquareText>
                    </InfoSquare>
                </MidSectionCol1>
                <MidSectionCol2>
                    <PlantImage 
                        source={plantInfo.image}
                    />
                </MidSectionCol2>
            </MidSection>
            <BottomSection>
                <BottomSectionTitle>
                    Sobre
                </BottomSectionTitle>
                <BottomText>
                    {plantInfo.description}
                </BottomText>
            </BottomSection>
            <RightSection></RightSection>
        </Container>
        
    )
}

export {InfoPlant}