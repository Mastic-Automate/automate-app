import { Feather, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Input } from '../../components/Input';
import { Titlebar } from '../../components/TitleBar';
import { appImages } from '../../global/images';
import { useUserInfo } from '../../hooks/useUserInfo';
import {
    AccountImage,
    AccountSection,
    AccountSectionInfoCol1,
    AccountUserEmail,
    AccountUserName, Container,
    HeadingSection, InputsRow, MainSection, MessageContainer, MessageContainerCol1,
    MessageContainerCol2, MessageContainerText, SectionOptions, SectionTitle, ThemeButton
} from './styles';

import { useTheme as useThemeContext } from '../../hooks/useTheme'
import { useTheme } from 'styled-components';

export function Config({navigation}){
    const {toggleTheme, theme} = useTheme()
    const {user} = useAuth()

    const isDarkTheme = !(isTheme === 'light')

    const openDrawer = () => navigation.openDrawer();
    const configIcon =
        <Ionicons
            name="settings-outline"
            color={theme.text2}
            size={35}
            onPress={() => navigation.replace('authRoutes', { screen: 'config' })}
            style={{ margin: 10, marginRight: 20 }}
        />

    const themeButton = () => {
        return (
            <ThemeButton
                onPress={() => {
                    toggleTheme()
                }}
            >
                <Feather
                    color="#ffffff"
                    size={30}
                    name={isTheme === 'light' ? 'moon' : 'sun'}
                />
            </ThemeButton>
        )
    }


    return (
        <>
            <StatusBar
                backgroundColor={theme.background}
                animated={true}
                hideTransitionAnimation={true}
                translucent={true}
            />

            <Titlebar
                    navigation={navigation}
                    title="Automate"
                    style={{
                        position: 'absolute',
                        marginTop: 20,
                        zIndex: 999999999,
                    }}
                />
            
            
            <Container> 
            <HeadingSection>
                
                
                <View>
                    <AccountSection
                        onPress={() => {
                            navigation.navigate('account')
                        }}
                    >
                        <AccountImage
                            source={appImages['profile_placeholder']}
                        />
                        <AccountSectionInfoCol1>
                            {!!user && (
                                <>
                                    <AccountUserName>{user.userName}</AccountUserName>
                                    <AccountUserEmail>{user.userEmail}</AccountUserEmail>
                                </>
                            )}
                        </AccountSectionInfoCol1>
                    </AccountSection>
                    <MessageContainer>
                        <MessageContainerCol1>
                            <MessageContainerText>
                                Lembre-se de encher seu recipiente de água.
                            </MessageContainerText>
                        </MessageContainerCol1>
                        <MessageContainerCol2>
                            <Image
                                source={require('../../assets/rose.png')}
                                style={{ width: 100, height: 100 }}
                            />
                        </MessageContainerCol2>
                    </MessageContainer>
                </View>
                
            </HeadingSection>
            <MainSection>
                <InputsRow>
                    {themeButton()}
                    <Input
                        iconType={Feather}
                        iconName="search"
                        style={{
                            flex: 1
                        }}
                        placeholder="Pesquisar"
                    />
                </InputsRow>
                <SectionTitle>
                    Geral
                </SectionTitle>
                <SectionTitle>
                    Arduino
                </SectionTitle>
                <SectionTitle>
                    Notificações
                </SectionTitle>
                <SectionOptions>

                </SectionOptions>

            </MainSection>

        </Container>

        </>
        
    

    )
}