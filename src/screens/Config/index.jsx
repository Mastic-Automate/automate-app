import styled from 'styled-components/native';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import {ConfigTileSwitch, ConfigTileSection} from '../../components/ConfigTile'
import { useTheme } from '../../hooks/useTheme';

const Container = styled.View`
    padding-left: 10px;
    padding-right: 10px;
    background-color:${props => props.theme.background};
    flex:1;
`

const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 30px;
    width: 100%;
    text-align:center;
    margin-top: 75px;
`

const TilesContainer = styled.View`
    align-items:center;
    margin-top: 80px;
    width: 100%;
`

export function Config({navigation}){
    const {toggleTheme, theme} = useTheme()

    const isDarkTheme = !(theme==='light')

    return(
        <Container>
            <Title>Configurações</Title>
            <TilesContainer>

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
                    onPress={() => navigation.replace('account')}
                />
            </TilesContainer>

        </Container>
    ) 
}