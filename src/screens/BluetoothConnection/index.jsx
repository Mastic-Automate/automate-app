import { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import {Ionicons} from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { Text, View } from 'moti';



const Container = styled.View`
    flex:1;
    align-items:left;
    background-color: ${props => props.theme.background};
`
const Title = styled.Text`
    font-size:30px;
    color: ${props => props.theme.title};
    margin-top:30px;
    width:100%;
    text-align:center;
`
const Subtitle = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.subtitle};
    margin-top:30px;
    width:100%;
    text-align:center;
`

const BluetoothIcon = styled(Ionicons)`
    margin-top: 20px;
    font-size:80px;
    color: ${props => props.theme.primary};
`
const NewTitle = styled.Text`
    font-size:2.25rem;
    color: ${props => props.theme.title};
    width: 17.5rem;
    font-family: 'ProximaNovaExtraBold';
    text-align: left;
    margin-top: 0.625rem;
    margin-left: 2.75rem;
`

const NewSubtitle = styled.Text`
    font-size: 1.25rem;
    color: ${props => props.theme.title};
    font-weight: 400;
    line-height: 24px;
    width: 18.75rem;
    height: 2.75rem;
    margin-left: 2.75rem;
    font-family: 'Montserrat';
    margin-top: 1.063rem;
    text-align: left;

`

function BluetoothConnection({navigation, route}){
    const {target, params} = route.params
    useEffect(()=>{
        setTimeout(function (){
        navigation.replace(target, params)
        },5000)
    }, [])

    let [fontsLoaded] = useFonts({
        'ProximaNovaBold': require('../../../assets/fonts/proximaNova/ProximaNovaBold.otf'),
        'ProximaNovaExtraBold': require('../../../assets/fonts/proximaNova/ProximaNovaExtraBold.otf'),
        'Montserrat': require('../../../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    });

    return (
        <Container>
            <NewTitle >Procurando dispositivo</NewTitle>
            <NewSubtitle>Seu dispositivo Automate deve aparecer aqui, em breve.</NewSubtitle>
            <Image
                style={{width: '26.75rem', height: '20.06rem', marginTop: '2.25rem',  }}
                source={require('../../../assets/conexão.gif')} 
            />
                
        </Container>
    )
}

export {BluetoothConnection}