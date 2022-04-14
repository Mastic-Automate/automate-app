import styled from 'styled-components/native'

import {Button} from '../../components/Button'

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

const TilesContainer = styled.ScrollView`
    margin-top: 80px;
    width: 100%;
`

function AccountSettings(){
    return (
        <Container>
            <Title>Configurações de conta</Title>

            <TilesContainer>
                <Button text="Logout" />
            </TilesContainer>

        </Container>
    )
}

export {AccountSettings}