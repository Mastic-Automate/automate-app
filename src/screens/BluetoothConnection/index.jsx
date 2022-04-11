import { useEffect } from 'react'
import styled, { useTheme } from 'styled-components/native'

import {Ionicons} from '@expo/vector-icons'

const Container = styled.View`
    flex:1;
    align-items:center;
`
const Title = styled.Text`
    font-size:30px;
    color: ${props => props.theme.title};
    margin-top:30px;
`
const Subtitle = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.subtitle};
    margin-top:30px;
`

const BluetoothIcon = styled(Ionicons)`
    margin-top: 20px;
    font-size:80px;
    color: ${props => props.theme.primary};
`

function BluetoothConnection({navigation, route}){
    const {target, params} = route.params
    useEffect(() =>{
        setTimeout(()=>{
            navigation.replace(target, params)
        }, 3000)
    }, [])
    return (
        <Container>
            <Title>Esperando conexão bluetooth...</Title>
            <Subtitle>Conecte ao microcontrolador através do Bluetoth</Subtitle>
            <BluetoothIcon name="bluetooth-outline" />
        </Container>
    )
}

export {BluetoothConnection}