import styled from 'styled-components/native'
import {View, Text} from 'react-native'

import {MaterialCommunityIcons as MaterialCommunity, MaterialIcons as Material} from '@expo/vector-icons'

import {Button} from '../../components/Button'
import { Input } from '../../components/Input'

const Container = styled.View`
    padding: 10px;
    background-color: ${props => props.theme.background};
`

const Title = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.title};
    width: 100%;
    text-align: center;
`

const BottomText = styled.Text`
    color: ${props => props.theme.secondary1};
    font-size: 20px;
    width: 100%;
    text-align:center;
`

const BottomLink = styled.TouchableOpacity`
    width: 100%;
`
const BottomLinkText = styled.Text`
    text-align:center;
    color: ${props => props.theme.primary};
    font-weight: bold;
    font-size: 20px;
    font-family: Poppins;
`

const InputsView = styled.View`
    margin: 10px;
`

export function Login({navigation}){
    function signIn(){
        navigation.replace('main')
    }
    return (
        <Container>
            <Title>Login</Title>
            <InputsView>
            
                <Input 
                    placeholder="Email"
                    iconType={MaterialCommunity}
                    iconName="account-circle-outline"
                    containerProps={{marginTop:10}}
                />
                <Input 
                    placeholder="Senha"
                    iconType={Material}
                    iconName="lock-outline"
                    containerProps={{marginTop:10}}
                />

                <Button text="Login" onPress={signIn} style={{marginTop:10}} />
            </InputsView>
            <BottomText>Ainda não possui uma conta?</BottomText>
            <BottomLink onPress={()=> navigation.replace('register')}>
                <BottomLinkText>Registre-se! </BottomLinkText>
            </BottomLink>
        </Container>
    )
}