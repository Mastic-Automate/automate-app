import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons'

import { useTheme } from "styled-components";

import { SidebarItem } from "./SidebarItem";
import { 
    TopImage, 
    BottomSection, 
    MainSection, 
    TopSection,
    BarContainer,
    BottomText,
    BottomProfilePicture,
    CornerImage
} from "./styles";
import { appImages } from "../../global/images";
import { useAuth } from '../../hooks/useAuth';

export const SideBar = (props) => {
    const theme = useTheme()
    const {user} = useAuth()

    return (
        <BarContainer 
            {...props}
            style={{
                backgroundColor:theme.tabBackground,
                height: '100%'
            }} 
        >
            <TopSection>
                <TopImage 
                    source={appImages['plant3']}
                />
            </TopSection>
            <MainSection>
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
                        props.navigation.navigate("plants");
                    }}
                    text="Minhas plantas"
                    iconName="list"
                    iconType={Entypo}
                    focused={props.state.index === 1}
                />
                <SidebarItem
                    onPress={() => {
                        props.navigation.navigate("addPlant");
                    }}
                    text="Adicionar Planta"
                    iconName="tree"
                    iconType={Entypo}
                    focused={props.state.index === 2}
                />
            </MainSection>
            <BottomSection onPress={() => {
                props.navigation.navigate('config', {screen:'account'})
            }}>
                {!!user && (
                    <BottomText>
                        {user.userName}
                    </BottomText>
                )}
                <BottomProfilePicture source={appImages['profile_placeholder']} />
            </BottomSection>
            <CornerImage 
                source={appImages['plant2']}
            />
        </BarContainer>
    );
};