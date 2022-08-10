import { MaterialCommunityIcons as MaterialCommunity, MaterialIcons as Material } from '@expo/vector-icons'

import { Button } from '../../components/Button'
import { FormInput as Input } from '../../components/FormInput'

import { useAuth } from '../../hooks/useAuth'

import { appImages } from '../../global/images'

import { 
    BottomLink, 
    BottomLinkText, 
    BottomText, 
    BottomView, 
    Container, 
    InputsView, 
    Title,
    ErrorText,
    Menu,
    Subtitle,
    HeadingSection,
    BackgroundImage,
    PlantImage
} from './styles'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { Image } from 'react-native'

const schema = yup.object({
    email: yup.string().required("Campo de email obrigatório").email("Email inválido"),
    password: yup.string().required("Campo de senha obrigatório")
})

export function Login({ navigation }) {
    const { signIn } = useAuth()
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [bottomError, setBottomError] = useState('')

    function handleSignin(data) {
        signIn(data.email, data.password).then(result => {
            if(!result.sucess){
                setBottomError(result.error.msg)
            }
        })
    }

    return (
        <Container>
            <BackgroundImage source={require('../../assets/background1.png')}>

                <Image 
                    source={require('../../assets/logo_automate.png')}
                    style={{width:150, height:150}}
                />
                
                <Menu>
                    <HeadingSection>
                        <Title>LOGIN</Title>
                        <Subtitle>Sua nova forma de plantar!</Subtitle>
                    </HeadingSection>

                    <InputsView>
                        <Input
                            name="email"
                            control={control}
                            error={errors.email}
                            keyboardType="email-address"
                            placeholder="Email"
                            style={{ marginTop: 10, backgroundColor:'#9BC2DD'}}
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholderTextColor="#487B9D"
                        />
                        <Input
                            name="password"
                            control={control}
                            error={errors.password}
                            placeholder="Senha"
                            secureTextEntry
                            style={{ marginTop: 10, backgroundColor:'#9BC2DD' }}
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholderTextColor="#487B9D"
                        />

                        <Button text="Login" onPress={handleSubmit(handleSignin)} style={{ marginTop: 10 }} />
                        <ErrorText>{bottomError}</ErrorText>
                    </InputsView>
                    <PlantImage
                        source={appImages['plant2']}
                    />
                    <BottomView>
                        <BottomLink onPress={() => navigation.replace('register')}>
                            <BottomLinkText>Criar conta</BottomLinkText>
                        </BottomLink>
                    </BottomView>
                </Menu>
            </BackgroundImage>
        </Container>
    )
}