import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'
import { Text } from 'moti'
import { useCallback, useEffect, useMemo } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { Button } from '../../components/Button'
import { useBluetoothConnection } from '../../contexts/BLuetoothConnectionContext'


const Container = styled.View`
    flex:1;
    align-items:flex-start;
    justify-content:space-between;
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
    font-size:32px;
    color: #000;
    width: 280px;
    font-family: 'ProximaNovaExtraBold';
    text-align: left;
    margin-left: 44px;
    width: 70%;
    margin-top: 20px;
`

const NewSubtitle = styled.Text`
    font-size: 20px;
    color: #000;
    font-weight: 400;
    line-height: 24px;
    width: 70%;
    margin-left: 44px;
    font-family: 'Montserrat';
    margin-top: 17px;
    text-align: left;

`


const AutomateName = styled.Text`
    width: 296px;
    margin-left: 71px;
    margin-top: 17px;

    font-family: 'ProximaNovaBold';
    font-size: 32px;

    color: #000000;

`

const NavDiv = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    
    margin-top: 5px;
`
const LineDiv = styled.View`
    width: 90%;
    height: 3px;
    background-color: #000718;
    margin-top: 17.6px;
    align-self: center;
`
// Alça em inglês é muito dificio, então vai barrinha mesmo
const Barrinha = styled.View`

    width: 25%;
    height: 10px;
    background-color: #8FA9BB;
    align-self: center;
    border-radius: 16px;
    margin-top: 14px;
    
`

const ContainerMenuFooter = styled.View`
    width: 100%;
    height: 136px;
    background-color: #D7E1E8;

    border-top-left-radius: 54px;
    border-top-right-radius: 54px;

    
`

const ContentMenuFooter = styled.View`
    width: 90%;
    height: 25%;


    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: space-around;
    
    flex-direction: row;
    
`

const BatteryIcon = styled(MaterialIcons)`
    font-size: 75px;
    transform: rotate(90deg);
   
`

const DropIcon = styled(MaterialIcons)`
    font-size: 75px;

`

const SunIcon = styled(MaterialIcons)`
    font-size: 75px;

`

const DescText = styled(Text)`
    position: absolute;
    font-size: 19px;
    align-self: center;
    top: 75%;
    text-align: center;
`

const StatusGif = styled.Image`
    border-radius:40px;
`

export function ConnectPlant({ route }) {
    const { connect, disconnect, sendMessage, automateDevice, devicesFound, deviceData, isConnected, connectUsingId, startSearchForDevices } = useBluetoothConnection()
    const automateFound = !!automateDevice && Object.keys(automateDevice).length > 0
    const id = route.params.id

    const searchingForDevices = useMemo(() => !(devicesFound.length > 0), [devicesFound])

    useFocusEffect(useCallback(() => {
        console.log(`Tela de conexão aberta, usando o id ${id}`);
        connectUsingId(id)
        return () => {
            console.log('Tela fechou-se, disconectando...')
            disconnect()
        }
    }, [automateDevice, id]))

    useEffect(() => {
        console.log(deviceData)
    }, [deviceData])

    useEffect(() => {
        if (!searchingForDevices) {
            connectUsingId(id)
        }
    }, [searchingForDevices])


    if (searchingForDevices) {
        return <Text>Ainda procurando dispositivos...</Text>
    }
    if (!isConnected) {
        console.log('Iniciando a conexão pois não está conectado')
        return <Text>Conectando com o dispositivo de id {id}...</Text>
    }


    return (
        <Container>
            <NewSubtitle>Aí está ele! Veja estatísticas como bateria e nível de sol.</NewSubtitle>
            <LineDiv />
            <StatusGif
                style={{ width: 342, height: 256, borderRadius: 40, marginTop: '7%', alignSelf: 'center' }}
                source={require('../../../assets/arduino.gif')}
            />
            <AutomateName>{JSON.stringify(deviceData)}</AutomateName>
            <Text>Média da umidade: {deviceData.humidityAverage}</Text>
            <Text>Média da umidade: {deviceData.wateredTimes}</Text>
            <Button
                text="Desconectar"
                onPress={() => disconnect()}
            />
            <ScrollView style={{ height: '100%', flex: 1, marginTop: '5%', width: '100%', }}>
                <ContainerMenuFooter style={{ marginTop: "5%", minHeight: '200%', flex: 1, width: '100%' }}>
                    <Barrinha />
                    <ContentMenuFooter>
                        <BatteryIcon name='battery-std' color="#42db49" />
                        <DropIcon name='opacity' color="#006eff" />
                        <SunIcon name='brightness-7' color="#e9db19" />
                    </ContentMenuFooter>
                </ContainerMenuFooter>
            </ScrollView>
        </Container>
    )
}
