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

const iconByRouteName = {
    'home': (iconProps) => <Material name="home" {...iconProps} />,
    'plantsManagement': (iconProps) => <MaterialIcons name="dashboard" {...iconProps} />,
    'config':(iconProps) => <Material name="cog" {...iconProps} />,
    'videos':(iconProps) => <Material name="play-circle-outline" {...iconProps} />
}

export function BottomTabBar({state, navigation}){
    return (
        <Container>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <BottomTabBarItem
                        key={route.key}
                        isActive={isFocused}
                        Icon={iconByRouteName[route.name]}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    />
                )
            })}
            {/* <BottomTabBarItem
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
            /> */}
        </Container>
    )
}