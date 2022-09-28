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
import { useUserInfo } from '../../hooks/useUserInfo'

function AccountSettings() {
    const {signOut} = useAuth()
    const {data:user} = useUserInfo()

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