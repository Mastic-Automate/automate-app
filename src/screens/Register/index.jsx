import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import { useForm } from 'react-hook-form'

import { FormInput as Input } from '../../components/FormInput'
import { Button } from '../../components/Button'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {useAuth} from '../../hooks/useAuth'

import { 
    BottomInfo, 
    BottomText, 
    Container, 
    Content, 
    Inputs, 
    LoginLink, 
    LoginLinkText, 
    Title,
    ErrorText
} from './styles'
import { useEffect, useState } from 'react'

const schema = yup.object({
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    name: yup.string().required("Nome é obrigatório"),
    password: yup.string().required("Senha obrigatória").min(6, "Senha deve ter ao menos 6 caracteres"),
    'password-confirm': yup.string().required("Confirmação de senha é obrigatório").oneOf([yup.ref('password'), null], "Senha de confirmação deve ser igual a primeira senha")
})

export function Register({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const {signUp, user} = useAuth()
    
    useEffect(() => {
        if(user !== null) {
            navigation.replace('main')
        }
    }, [user])

    const [bottomError, setBottomError] = useState('')

    function handleUserRegister(data) {
        signUp(data.email, data.name, data.password).then(result => {
            if(!result.sucess) {
                setBottomError((result.error.msg))
            }
        })
    }
    return (
        <Container>
            <Content>

                <Title>Cadastrar</Title>
                <Inputs>
                    <Input
                        name="email"
                        control={control}
                        iconName="email-outline"
                        iconType={MaterialCommunityIcons}
                        style={{ marginTop: 10 }}
                        placeholder="Email"
                        error={errors.email}
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <Input
                        name="name"
                        control={control}
                        iconName="account-circle-outline"
                        iconType={MaterialCommunityIcons}
                        style={{ marginTop: 10 }}
                        placeholder="Nome"
                        error={errors.name}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <Input
                        name="password"
                        control={control}
                        iconName="lock-outline"
                        iconType={MaterialIcons}
                        style={{ marginTop: 10 }}
                        placeholder="Senha"
                        error={errors.password}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <Input
                        name="password-confirm"
                        control={control}
                        iconName="lock-outline"
                        iconType={MaterialIcons}
                        style={{ marginTop: 10 }}
                        placeholder="Confirmar senha"
                        error={errors['password-confirm']}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <Button
                        text="Cadastrar"
                        style={{ marginTop: 10 }}
                        onPress={handleSubmit(handleUserRegister)}
                    />
                    <ErrorText>{bottomError}</ErrorText>

                </Inputs>
            </Content>
            <BottomInfo>
                <BottomText>Já possui uma conta?</BottomText>
                <LoginLink onPress={() => navigation.replace('login')}>
                    <LoginLinkText>Login</LoginLinkText>
                </LoginLink>
            </BottomInfo>
        </Container>
    )
}