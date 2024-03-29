import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import { useForm } from 'react-hook-form'
import {Image} from 'react-native'
import { FormInput as Input } from '../../components/FormInput'
import { Button } from '../../components/Button'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {useAuth} from '../../hooks/useAuth'
import {appImages} from '../../global/images'
import { useTheme } from '../../hooks/useTheme';

import { 
    BackgroundImage,
    BottomLink,
    BottomLinkText,
    BottomText,
    BottomView,
    Container,
    ErrorText,
    HeadingSection,
    InputsView,
    Menu,
    Subtitle,
    Title,
    PlantImage,
    AlignHelper
} from './styles'
import { useState } from 'react'

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

    const {theme} = useTheme()
    const {signUp} = useAuth()

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
            <BackgroundImage source={theme === 'light' ? require('../../assets/background1.png') : require('../../assets/background-night.png')}>
                <Image 
                    source={require('../../assets/logo_automate.png')}
                    style={{width:150, height:150}} 
                />
                <Menu>
                    <HeadingSection>
                        <Title>CADASTRE-SE</Title>
                        <Subtitle>Venha participar do melhor projeto de agricultura urbana!</Subtitle>
                    </HeadingSection>
                    <InputsView>
                        <Input
                            name="email"
                            control={control}
                            style={{ 
                                marginTop: 24,
                                marginBottom: 24,
                                backgroundColor:'#9BC2DD',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 12,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 16.00,
                                elevation: 30,
                            }}
                            placeholder="Email"
                            error={errors.email}
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholderTextColor="#487B9D"
                        />
                        <Input
                            name="name"
                            control={control}
                            style={{ 
                                marginBottom: 24,
                                backgroundColor:'#9BC2DD',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 12,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 20,
                                elevation: 25,
                            }}
                            placeholder="Nome"
                            error={errors.name}
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholderTextColor="#487B9D"
                        />
                        <Input
                            name="password"
                            control={control}
                            style={{ 
                                marginBottom: 24,
                                backgroundColor:'#9BC2DD',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 12,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 20,
                                elevation: 25,
                            }}
                            placeholder="Senha"
                            error={errors.password}
                            secureTextEntry
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholderTextColor="#487B9D"
                        />
                        <Input
                            name="password-confirm"
                            control={control}
                            style={{ 
                                marginBottom: 24,
                                backgroundColor:'#9BC2DD',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 12,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 20,
                                elevation: 25,
                            }}
                            placeholder="Confirmar senha"
                            error={errors['password-confirm']}
                            secureTextEntry
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholderTextColor="#487B9D"
                        />
                        <Button
                            text="Cadastrar"
                            style={{ marginTop: 10 }}
                            onPress={handleSubmit(handleUserRegister)}
                            variant="blue"
                        />
                        <ErrorText>{bottomError}</ErrorText>

                    </InputsView>
                    <PlantImage 
                        source={appImages['plant2']}
                    />
                    <BottomView>
                        <AlignHelper>
                            <BottomLink onPress={() => navigation.replace('login')}>
                                <BottomLinkText>Login</BottomLinkText>
                            </BottomLink>
                            <BottomLink onPress={() => navigation.replace('login')}>
                                <BottomLinkText>Ajuda</BottomLinkText>
                            </BottomLink>
                        </AlignHelper>
                    </BottomView>
                </Menu>
            </BackgroundImage>
        </Container>
    )
}