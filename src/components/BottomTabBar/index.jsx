import {View, Button} from 'react-native'
import styled from 'styled-components/native'

import {MaterialCommunityIcons as Material, MaterialIcons} from '@expo/vector-icons'

import { BottomTabBarItem } from '../BottomTabBarItem'
import { useState } from 'react'

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
`

export function BottomTabBar({navigation, state}){
    function navigate(screenName){
        navigation.replace('authRoutes', {screen: screenName})
    }

    return (
        <Container>
            <BottomTabBarItem
                index={0}
                currentIndex={state.index}
                Icon={(iconProps) => <Material name="home" {...iconProps} />}
                buttonProps={{
                    onPress: ()=> {
                        navigate('home')
                    }
                }} 
            />
            <BottomTabBarItem
                index={1}
                currentIndex={state.index}
                Icon={(iconProps) => <MaterialIcons name="dashboard" {...iconProps} />}
                buttonProps={{
                    onPress: ()=> {
                        navigate('plantsManagement')
                    }
                }} 
            />
            <BottomTabBarItem
                index={2}
                currentIndex={state.index}
                Icon={(iconProps) => <Material name="play-circle-outline" {...iconProps} />}
                buttonProps={{
                    onPress: ()=> {
                        navigate('videos')
                    }
                }} 
            />
            <BottomTabBarItem
                index={3}
                currentIndex={state.index}
                Icon={(iconProps) => <Material name="cog" {...iconProps} />}
                buttonProps={{
                    onPress: ()=> {
                        navigate('config')
                    }
                }} 
            />
        </Container>
    )
}