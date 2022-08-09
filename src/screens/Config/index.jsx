import {Image} from 'react-native'

import {ConfigTileSwitch, ConfigTileSection} from '../../components/ConfigTile'
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';
import {appImages} from '../../global/images'

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
    AccountUserName
} from './styles'

export function Config({navigation}){
    const {toggleTheme, theme} = useTheme()
    const {user} = useAuth()

    const isDarkTheme = !(theme==='light')

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
                <SectionTitle>
                    Geral
                </SectionTitle>
                <ConfigTileSwitch
                    text="Tema escuro"
                    value={isDarkTheme}
                    onChange={toggleTheme}
                    style={{margin:5}}
                />
            </MainSection>

        </Container>
    ) 
}