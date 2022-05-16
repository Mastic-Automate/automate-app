import {MaterialCommunityIcons as MaterialCommunity, MaterialIcons as Material} from '@expo/vector-icons'

import {Button} from '../../components/Button'
import {FormInput as Input } from '../../components/FormInput'

import {useAuth} from '../../hooks/useAuth'

import {BottomLink, BottomLinkText, BottomText, BottomView, Container, InputsView, Title} from './styles'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object({
    email: yup.string().required("Campo de email obrigatório").email("Email inválido"),
    password: yup.string().required("Campo de senha obrigatório")
})

export function Login({navigation}){
    const {signIn:authSignIn} = useAuth()
    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })
    function signIn(data){
        authSignIn(data.email, data.password)
    }
    return (
        <Container>
            <Title>Login</Title>
            <InputsView>
            
                <Input
                    name="email"
                    control={control}
                    error={errors.email}
                    placeholder="Email"
                    iconType={MaterialCommunity}
                    iconName="account-circle-outline"
                    style={{marginTop:10}}
                />
                <Input
                    name="password"
                    control={control}
                    error={errors.password}
                    placeholder="Senha"
                    iconType={Material}
                    iconName="lock-outline"
                    secureTextEntry
                    style={{marginTop:10}}
                />

                <Button text="Login" onPress={handleSubmit(signIn)} style={{marginTop:10}} />
            </InputsView>
            <BottomView>
                <BottomText>Ainda não possui uma conta?</BottomText>
                <BottomLink onPress={()=> navigation.replace('register')}>
                    <BottomLinkText>Registre-se! </BottomLinkText>
                </BottomLink>
            </BottomView>
        </Container>
    )
}