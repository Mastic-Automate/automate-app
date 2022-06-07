import { MaterialCommunityIcons as MaterialCommunity, MaterialIcons as Material } from '@expo/vector-icons'

import { Button } from '../../components/Button'
import { FormInput as Input } from '../../components/FormInput'

import { useAuth } from '../../hooks/useAuth'

import RNBluetoothClassic, { BluetoothEventType } from 'react-native-bluetooth-classic';
import { PermissionsAndroid } from 'react-native';
import { ToastAndroid } from 'react-native';

import { 
    BottomLink, 
    BottomLinkText, 
    BottomText, 
    BottomView, 
    Container, 
    InputsView, 
    Title,
    ErrorText
} from './styles'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import RCTDeviceEventEmitter from 'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter';

const schema = yup.object({
    email: yup.string().required("Campo de email obrigatório").email("Email inválido"),
    password: yup.string().required("Campo de senha obrigatório")
})

export function Login({ navigation }) {
    const { signIn } = useAuth()
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [bottomError, setBottomError] = useState('')

    function handleSignin(data) {
        signIn(data.email, data.password).then(result => {
            if(!result.sucess){
                setBottomError(result.error.msg)
            }
        })
    }

    const [unpaired, setUnpaired] = useState([])
    const [microController, setMicroController] = useState(null)
    const [paired, setPaired] = useState([])
    const [discovering, setDiscovering] = useState(null)

    const handleScan = async () => {
        if(!!microController){
            const msg = JSON.stringify({
                command: 'setUmidade',
                arg:"50"
            })
            RNBluetoothClassic.writeToDevice(microController.address, msg, 'utf-8')
        } else{
            console.log('Ainda não pode escrever!')
        }
    }

    async function requestAccessFineLocationPermission() {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Access fine location required for discovery',
            message:
              'In order to perform discovery, you must enable/allow ' +
              'fine location access.',
            buttonNeutral: 'Ask Me Later"',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      };
    useEffect(()=>{
        RNBluetoothClassic.startDiscovery().then((result) => {
            setUnpaired(result)
            //console.log(unpaired[1].name);
        });
        RNBluetoothClassic.getBondedDevices().then(result => {
            setPaired(result)
        })

    }, [])

    useEffect(() => {
        const targetDevices = [...unpaired, ...paired]
        if(unpaired.length>0){
            console.log('Escaneou')

            console.log(`Quantidade de aparelhos: ${targetDevices.length}`)
            const automateController = targetDevices.filter(device => device.name === "Automate")[0]
            if(!!automateController){
                console.log('Aparelho já está conectado...')
                setMicroController(automateController)
                RNBluetoothClassic.getConnectedDevice(automateController.address).then(connectedDevice => {
                    if(!connectedDevice){
                        RNBluetoothClassic.pairDevice(automateController.address).then(result => {
                            RNBluetoothClassic.cancelDiscovery()
                            RNBluetoothClassic.connectToDevice(automateController.address)
            
                            //console.log(result)
                        })
                    }
                })
            }
            //console.log(automateController)

        }
        
    }, [unpaired, paired])
    
    useEffect(()=>{
        if(!!microController){
            console.log('microcontrolador a seguir: ')
            console.log(microController)
            RNBluetoothClassic.connectToDevice(microController.address).then(resultDevice => {
                console.log('Resultado da conexão a seguir')
                console.log(resultDevice)
            })
        }
    }, [microController])

    return (
        <Container>
            <Title>Testes Bluetooth classic</Title>
            <InputsView>

                <Input
                    name="email"
                    control={control}
                    error={errors.email}
                    keyboardType="email-address"
                    placeholder="Email"
                    iconType={MaterialCommunity}
                    iconName="account-circle-outline"
                    style={{ marginTop: 10 }}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <Input
                    name="password"
                    control={control}
                    error={errors.password}
                    placeholder="Senha"
                    iconType={Material}
                    iconName="lock-outline"
                    secureTextEntry
                    style={{ marginTop: 10 }}
                    autoCorrect={false}
                    autoCapitalize="none"
                />

                <Button text="Teste" onPress={handleScan} style={{ marginTop: 10 }} />
                {unpaired.map(device => (
                    <BottomText>{device.name}</BottomText>
                ))}
                <ErrorText>{bottomError}</ErrorText>
            </InputsView>
            <BottomView>
                <BottomText>Ainda não possui uma conta?</BottomText>
                <BottomLink onPress={() => navigation.replace('register')}>
                    <BottomLinkText>Registre-se! </BottomLinkText>
                </BottomLink>
            </BottomView>
        </Container>
    )
}