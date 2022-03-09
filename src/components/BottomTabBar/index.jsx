import {View, Button} from 'react-native'
import styled from 'styled-components/native'

import {MaterialCommunityIcons as Material, MaterialIcons} from '@expo/vector-icons'

import { BottomTabBarItem } from '../BottomTabBarItem'

const Container = styled.View`
    height: 70px;
    background-color: ${props => props.theme.background};
    flex-flow: row nowrap;
    align-items:center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    gap: 10px;
`

export function BottomTabBar({navigation}){
    function navigate(screenName){
        navigation.replace('main', {screen: screenName})
    }

    return (
        <Container>
            <BottomTabBarItem
                active
                Icon={(iconProps) => <Material name="home" {...iconProps} />}
                buttonProps={{
                    onPress: ()=> navigate('home')
                }} 
            />
            <BottomTabBarItem
                Icon={(iconProps) => <MaterialIcons name="dashboard" {...iconProps} />}
                buttonProps={{
                    onPress: ()=> navigate('plants')
                }} 
            />
            <BottomTabBarItem
                Icon={(iconProps) => <Material name="play-circle-outline" {...iconProps} />}
                buttonProps={{
                    onPress: ()=> navigate('videos')
                }} 
            />
            <BottomTabBarItem
                Icon={(iconProps) => <Material name="cog" {...iconProps} />}
                buttonProps={{
                    onPress: ()=> navigate('config')
                }} 
            />
        </Container>
    )
}