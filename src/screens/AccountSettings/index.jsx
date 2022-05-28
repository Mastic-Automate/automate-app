import styled from 'styled-components/native'

import {useAuth} from '../../hooks/useAuth'

import { Button } from '../../components/Button'

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

function AccountSettings() {
    const {signOut} = useAuth()
    return (
        <Container>
            <Title>Configurações de conta</Title>

            <TilesContainer>
                <Button text="Logout" negative onPress={signOut} />
            </TilesContainer>

        </Container>
    )
}

export { AccountSettings }