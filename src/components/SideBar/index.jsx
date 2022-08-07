import {
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons'

import { useTheme } from "styled-components";

import { SidebarItem } from "./SidebarItem";
import { useEffect } from "react";

export const SideBar = (props) => {
    const theme = useTheme()

    useEffect(()=> {
        console.log(props.descriptors)
    }, [])

    return (
        <DrawerContentScrollView 
            {...props} 
            style={{
                backgroundColor:theme.tabBackground
            }} 
            contentContainerStyle={{
                alignItems:'flex-start'
            }}
        >
            <SidebarItem
                onPress={() => {
                    props.navigation.navigate("home");
                }}
                text="Home"
                iconName="home"
                iconType={MaterialCommunityIcons}
                focused={props.state.index === 0}
            />
            <SidebarItem
                onPress={() => {
                    props.navigation.navigate("plantsManagement");
                }}
                text="Minhas plantas"
                iconName="list"
                iconType={Entypo}
                focused={props.state.index === 1}
            />
        </DrawerContentScrollView>
    );
};