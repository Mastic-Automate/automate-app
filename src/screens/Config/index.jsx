import { Button, Switch } from 'react-native';
import styled from 'styled-components/native';

import {ConfigTileSwitch} from '../../components/ConfigTile/index'
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

export function Config(){
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
                />
            </TilesContainer>

        </Container>
    ) 
}