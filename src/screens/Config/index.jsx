import {Image} from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

import {ConfigTileSwitch, ConfigTileSection} from '../../components/ConfigTile'
import { useTheme } from '../../hooks/useTheme';

import {
    Container, 
    Title, 
    HeadingSection, 
    MainSection, 
    SectionTitle, 
    MessageContainer, 
    MessageContainerText,
    MessageContainerCol1,
    MessageContainerCol2
} from './styles'

export function Config({navigation}){
    const {toggleTheme, theme} = useTheme()

    const isDarkTheme = !(theme==='light')

    return(
        <Container>
            <HeadingSection>
                <Title>Configurações</Title>
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
                <ConfigTileSection 
                    text="Configurações de conta"
                    iconType={MaterialCommunityIcons}
                    iconName="account-circle-outline"
                    style={{margin:5}}
                    onPress={() => navigation.navigate('account')}
                />
            </MainSection>

        </Container>
    ) 
}