import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Text } from 'moti';
import { Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import { CarouselCard } from './CarouselCard';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '../../components/Button';
import { useBluetoothConnection } from '../../contexts/BLuetoothConnectionContext';
import { usePlantsManagement } from '../../contexts/PlantsManagementContext';


const SLIDER_WIDTH = (Dimensions.get('window').width)
const ITEM_WIDTH = SLIDER_WIDTH * 0.67

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

const ScanAutomate = ({ automateFound }) => {
    return (
        <>
            <NewTitle >Procurando dispositivo</NewTitle>
            <NewSubtitle>Seu dispositivo Automate deve aparecer aqui, em breve.</NewSubtitle>
            <LineDiv />

            <StatusGif
                style={{ width: 428, height: 330, marginTop: 36, borderRadius: 40, alignSelf: 'center' }}
                source={require('../../../assets/conexão.gif')}
            />

            <ContainerMenuFooter style={{ justifySelf: 'flex-end' }}>
                <Barrinha />
                <ContentMenuFooter style={{ flex: 1 }}>
                    <BatteryIcon name='battery-std' color={'#4e4e4e'} />
                    <DropIcon name='opacity' color={'#4e4e4e'} />
                    <SunIcon name='brightness-7' color={'#4e4e4e'} />
                </ContentMenuFooter>
            </ContainerMenuFooter>

        </>
    )
}

const FoundAutomate = ({ automate, deviceInfo, navigation }) => {
    const { automateDevice, data, devicesFound, connectUsingId, isConnected } = useBluetoothConnection()
    const { setAddingPlant } = usePlantsManagement()
    const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0)

    const currentDevice = useMemo(() => {
        return devicesFound[currentDeviceIndex]
    }, [currentDeviceIndex, devicesFound])

    useEffect(() => {
        console.log(currentDevice.name)
    }, [currentDevice])

    function handleAddPlant() {
        if (!!automateDevice && Object.keys(automateDevice).length > 0) {
            setAddingPlant({
                address: automateDevice.address,
                id: automateDevice.id
            })
            navigation.replace('add-plant')
        } else {
            console.log("Dispositivo ainda não foi encontrado, não pode salvar")
        }
    }

    async function handleConnect() {
        await connectUsingId(currentDevice.id)
    }

    useEffect(() => {
        devicesFound.map(device => console.log(device.name))
    }, [devicesFound])
    useEffect(() => {
        if (!!automateDevice && Object.keys(automateDevice).length > 0) {
            setAddingPlant({
                address: automateDevice.address,
                id: automateDevice.id
            })
            navigation.replace('add-plant')
        } else {
            console.log("Dispositivo ainda não foi encontrado, não pode salvar")
        }
    }, [automateDevice])

    return (
        <>

            {/* <NewTitle >Selecione seu dispositivo</NewTitle>
            <NewSubtitle>Aí está ele! Veja estatísticas como bateria e nível de sol.</NewSubtitle>
            <LineDiv />
            <StatusGif
                style={{width: 342, height: 256, borderRadius: 40, marginTop: '7%', alignSelf:'center'}}
                source={require('../../../assets/arduino.gif')} 
            />
            <Button 
                text="Adicionar"
                onPress={handleAddPlant}
            />
            <AutomateName>{JSON.stringify(deviceInfo)}</AutomateName> */}
            <ScrollView style={{ height: '100%', flex: 1, marginTop: '5%', width: '100%', }}>
                <Carousel
                    data={devicesFound}
                    renderItem={({ item, index }) => {
                        return (
                            <CarouselCard
                                name={item.name}
                                active={currentDeviceIndex === index}
                                key={item.id}
                                id={item.id}
                            />
                        )
                    }}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}

                    slideStyle={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onSnapToItem={setCurrentDeviceIndex}
                />
                <Button
                    text="Adicionar"
                    onPress={handleConnect}
                />
            </ScrollView>
        </>
    )
}

function BluetoothConnection({ navigation }) {
    const { connect, disconnect, sendMessage, automateDevice, data, devicesFound, deviceData, isConnected } = useBluetoothConnection()
    const { setAddingPlant } = usePlantsManagement()
    const automateFound = !!automateDevice

    let [fontsLoaded] = useFonts({
        'ProximaNovaBold': require('../../../assets/fonts/proximaNova/ProximaNovaBold.otf'),
        'ProximaNovaExtraBold': require('../../../assets/fonts/proximaNova/ProximaNovaExtraBold.otf'),
        'Montserrat': require('../../../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    });

    if (!fontsLoaded) {
        //console.log(fontsLoaded)
    }

    return (
        <Container>
            <NavDiv>
                <MaterialIcons style={{ fontSize: 24, fontWeight: '900', marginLeft: 32 }} name='arrow-back-ios' />
            </NavDiv>
            {devicesFound.length === 0 ? (
                <ScanAutomate />
            ) : (
                <FoundAutomate automate={automateDevice} deviceInfo={deviceData} connected={isConnected} navigation={navigation} />
            )}

        </Container>
    )
}

export { BluetoothConnection };

