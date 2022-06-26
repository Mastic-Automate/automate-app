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


const AutomateName = styled.Text`
width: 18.50rem;
height: 3.94;
margin-left: 4.438rem;
margin-top: 1.063rem;


font-family: 'ProximaNovaBold';
font-size: 2rem;


color: #000000;



`

const NavDiv = styled.View`
    width: 100%;
    height: 3.75rem;
    flex-direction: row;
    align-items: center;
    
    margin-top: 1.875rem;
`
const LineDiv = styled.View`
    width: 90%;
    height: 0.19rem;
    background-color: #000718;
    margin-top: 1.1rem;
   align-self: center;
`
// Alça em inglês é muito dificio, então vai barrinha mesmo
const Barrinha = styled.View`

    width: 25%;
    //width: 7rem;
    height: 0.63rem;
    background-color: #8FA9BB;
    align-self: center;
    border-radius: 0.938rem;
    margin-top: 0.875rem;
    
`

const ContainerMenuFooter = styled.View`
    width: 100%;
    height: 8.5rem;
    background-color: #D7E1E8;
    //display: block;
    //align-items: flex-start;
    border-top-left-radius: 3.375rem;
    border-top-right-radius: 3.375rem;

    
`

const ContentMenuFooter = styled.View`
    width: 90%;
    height: 25%;
    background-color: #265374;

    //align-items: flex-start;
    margin-top: 13%;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: space-around;
    flex: 0;
    flex-direction: row;
    
`

const BatteryIcon = styled(MaterialIcons)`
    font-size: 4.688rem;
    transform: rotate(90deg);
    //align-self: flex-start;
   // height: min-content;
    //margin-left: 3.25rem;
   
    //display: inline-flex;
    position: static;
    display: inline;
`

const DropIcon = styled(MaterialIcons)`
    font-size: 4.688rem;
   // align-self: center;
   // display: inline-block;

   // flex-direction: column;
    //display: inline-flex;
    position: static;
    display: inline;
`

const SunIcon = styled(MaterialIcons)`
    font-size: 4.688rem;
   // align-self: center;
   // display: inline-block;

   // flex-direction: column;
    //display: inline-flex;
    position: static;
    display: inline;
`

const DescText = styled(Text)`
    position: absolute;
    font-size: 1.2rem;
    align-self: center;
    top: 75%;
    text-align: center;
`

function ScanAutomate(){
    return (
        <>
            <NewTitle >Procurando dispositivo</NewTitle>
            <NewSubtitle>Seu dispositivo Automate deve aparecer aqui, em breve.</NewSubtitle>
            {/* <LineDiv /> */}
            <Image
                style={{width: '26.75rem', height: '20.06rem', marginTop: '2.25rem',  }}
                source={require('../../../assets/conexão.gif')} 
            />

            {/* <ContainerMenuFooter style={{marginTop: '10.188rem'}}>
                <BatteryIcon name='battery-std' color={automateFound?"#42db49":'#4e4e4e'} />
                <DropIcon name='opacity' color={automateFound?"#006eff":'#4e4e4e'} />
                <SunIcon name='brightness-7' color={automateFound?"#e9db19":'#4e4e4e'} />
            </ContainerMenuFooter> */}
            {/*N sei praq que isso tá servindo, ent comentei*/}
        </>
    )
    
}

function BluetoothConnection({navigation, route}){
   
    const [automateFound, setAutomateFound] = useState(true);

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
            <NavDiv>
                <MaterialIcons style={{fontSize: '1.50rem', fontWeight: '900', marginLeft: '2rem'}} name='arrow-back-ios' />
            </NavDiv>
            <ScanAutomate />
                
        </Container>
    )
}

export {BluetoothConnection}