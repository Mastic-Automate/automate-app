import {Image} from 'react-native'

import {Feather, FontAwesome5} from '@expo/vector-icons'

import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';
import {appImages} from '../../global/images';

import {Input} from '../../components/Input';

import {
    Container, 
    HeadingSection, 
    MainSection, 
    SectionTitle, 
    MessageContainer, 
    MessageContainerText,
    MessageContainerCol1,
    MessageContainerCol2,
    AccountImage,
    AccountSection,
    AccountSectionInfoCol1,
    AccountUserEmail,
    AccountUserName,
    InputsRow,
    ThemeButton,
    SectionOptions,

} from './styles'

export function Config({navigation}){
    const {toggleTheme, theme} = useTheme()
    const {user} = useAuth()

    const isDarkTheme = !(theme==='light')

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
                    name={theme === 'light' ? 'moon' : 'sun'}
                />
            </ThemeButton>
        )
    }

    return(
        <Container>
            <HeadingSection>
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
                            style={{width:100, height:100}}
                        />
                    </MessageContainerCol2>
                </MessageContainer>
            </HeadingSection>
            <MainSection>
                <InputsRow>
                    {themeButton()}
                        <Input 
                            iconType={Feather}
                            iconName="search"
                            style={{
                                flex:1
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
    ) 
}