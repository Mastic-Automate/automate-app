import { MaterialCommunityIcons as MaterialCommunity, MaterialIcons as Material } from '@expo/vector-icons'

import { Button } from '../../components/Button'
import { FormInput as Input } from '../../components/FormInput'

import { useAuth } from '../../hooks/useAuth'

import { BottomLink, BottomLinkText, BottomText, BottomView, Container, InputsView, Title } from './styles'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'

const schema = yup.object({
    email: yup.string().required("Campo de email obrigatório").email("Email inválido"),
    password: yup.string().required("Campo de senha obrigatório")
})

export function Login({ navigation }) {
    const { signIn, user } = useAuth()
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    function handleSignin(data) {
        signIn(data.email, data.password)
    }

    useEffect(() => {
        if (user !== null) {
            navigation.replace('main')
        }
    }, [user])
    return (
        <Container>
            <Title>Login</Title>
            <InputsView>

                <Input
                    name="email"
                    control={control}
                    error={errors.email}
                    keyboardType="email-address"
                    placeholder="Email"
                    iconType={MaterialCommunity}
                    iconName="account-circle-outline"
                    style={{ marginTop: 10 }}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <Input
                    name="password"
                    control={control}
                    error={errors.password}
                    placeholder="Senha"
                    iconType={Material}
                    iconName="lock-outline"
                    secureTextEntry
                    style={{ marginTop: 10 }}
                    autoCorrect={false}
                    autoCapitalize="none"
                />

                <Button text="Login" onPress={handleSubmit(handleSignin)} style={{ marginTop: 10 }} />
            </InputsView>
            <BottomView>
                <BottomText>Ainda não possui uma conta?</BottomText>
                <BottomLink onPress={() => navigation.replace('register')}>
                    <BottomLinkText>Registre-se! </BottomLinkText>
                </BottomLink>
            </BottomView>
        </Container>
    )
}