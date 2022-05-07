import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

import {useForm} from 'react-hook-form'

import {FormInput as Input} from '../../components/FormInput'
import {Button} from '../../components/Button'

import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {BottomInfo, BottomText, Container, Inputs, LoginLink, Title} from './styles'

const schema = yup.object({
    email: yup.string().required("Campo email é obrigatório").email("Email inválido"),
    password: yup.string().required("Campo senha obrigatório").min(6, "Senha deve ter ao menos 6 caracteres"),
    'password-confirm': yup.string().required("Campo de confirmação de senha obrigatório").oneOf([yup.ref('password'), null], "Senha de confirmação deve ser igual a primeira senha")
})

export function Register({navigation}){
    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })

    function handleUserRegister(data){
        console.log(data)
    }
    return (
        <Container>
            <Title>Cadastrar</Title>
            <Inputs>
                <Input
                    name="email"
                    control={control}
                    iconName="account-circle-outline"
                    iconType={MaterialCommunityIcons}
                    style={{marginTop: 10}}
                    placeholder="Email"
                    error={errors.email}
                    keyBoardType="email"
                />
                <Input 
                    name="password"
                    control={control}
                    iconName="lock-outline"
                    iconType={MaterialIcons}
                    style={{marginTop: 10}}
                    placeholder="Senha"
                    error={errors.password}
                    secureTextEntry
                />
                <Input
                    name="password-confirm"
                    control={control}
                    iconName="lock-outline"
                    iconType={MaterialIcons}
                    style={{marginTop: 10}}
                    placeholder="Confirmar senha"
                    error={errors['password-confirm']}
                    secureTextEntry
                />
                <Button
                    text="Cadastrar"
                    style={{marginTop:10}}
                    onPress={handleSubmit(handleUserRegister)}
                />

            </Inputs>
            <BottomInfo>
                <BottomText>Já possui uma conta?</BottomText>
                <LoginLink onPress={() => navigation.replace('login')}>Login</LoginLink>
            </BottomInfo>
        </Container>
    )
}