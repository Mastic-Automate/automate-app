import {useAuth} from '../../hooks/useAuth'

import { Button } from '../../components/Button'

import {
    Container, 
    TilesContainer, 
    Title, 
    ProfilePicture,
    UserNameText,
    EmailText
} from './styles'
import { appImages } from '../../global/images'

function AccountSettings() {
    const {signOut, user} = useAuth()

    return (
        <Container>
            <Title>Perfil</Title>
            <ProfilePicture 
                source={appImages['profile_placeholder']}
            />
            {!!user && (
                <>
                    <UserNameText>{user.userName}</UserNameText>
                    <EmailText>{user.userEmail}</EmailText>
                </>
            )}

            <TilesContainer>
                <Button text="Logout" negative onPress={signOut} />
            </TilesContainer>

        </Container>
    )
}

export { AccountSettings }