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
import { useAuth } from '../../hooks/useAuth';

export function Config({navigation}){
    const {toggleTheme, isTheme} = useThemeContext()
    const {user} = useAuth()
    const theme = useTheme();

    const isDarkTheme = !(isTheme === 'light')

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
                backgroundColor={theme.background1}
                animated={true}
                hideTransitionAnimation={true}
                translucent={true}
            />

            <Titlebar
                navigation={navigation}
                title="Automate"
                exe={() => navigation.goBack()}
                style={{
                    backgroundColor: theme.background1,
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