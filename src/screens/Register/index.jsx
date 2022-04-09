import styled from 'styled-components/native'
import {View, Text} from 'react-native'

import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

const Container = styled.SafeAreaView`
    padding:10px;
    background-color: ${props => props.theme.background};
    align-items:center;
    justify-content: space-around;
    flex:1;
`
const Title = styled.Text`
    font-size:30px;
    color: ${props => props.theme.title};
`

const Inputs = styled.View`
    width:100%;
`

const BottomInfo = styled.View`
    align-items: center;
`
const BottomText = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.secondary1};
`

const LoginLink = styled.TouchableOpacity`
    color: ${props => props.theme.primary};
    font-size: 20px;
    font-weight: bold;
    font-family: Poppins;
`

export function Register({navigation}){

    return (
        <Container>
            <Title>Cadastrar</Title>
            <Inputs>
                <Input 
                    iconName="account-circle-outline"
                    iconType={MaterialCommunityIcons}
                    style={{marginTop: 10}}
                    placeholder="Email"
                />
                <Input 
                    iconName="lock-outline"
                    iconType={MaterialIcons}
                    style={{marginTop: 10}}
                    placeholder="Senha"
                />
                <Input 
                    iconName="lock-outline"
                    iconType={MaterialIcons}
                    style={{marginTop: 10}}
                    placeholder="Confirmar senha"
                />
                <Button
                    text="Cadastrar"
                    style={{marginTop:10}}
                />

            </Inputs>
            <BottomInfo>
                <BottomText>Já possui uma conta?</BottomText>
                <LoginLink onPress={() => navigation.replace('login')}>Login</LoginLink>
            </BottomInfo>
        </Container>
    )
}