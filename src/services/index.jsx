import { MaterialCommunityIcons as MaterialCommunity, MaterialIcons as Material } from '@expo/vector-icons'

import { Button } from '../../components/Button'
import { FormInput, FormInput as Input } from '../../components/FormInput'

import { useAuth } from '../../hooks/useAuth'
import { Bluetooth, Scanear, SendMessage, Connect, Disconnect, DataRead } from './Bluetooth';
import RNBluetoothClassic, { BluetoothEventType, BluetoothEventSubscription, BluetoothEventListener, BluetoothDeviceReadEvent, BluetoothReadEvent } from 'react-native-bluetooth-classic';

import styled from 'styled-components'

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
import { set } from 'react-native-reanimated'

import { TextInput } from 'react-native'

const schema = yup.object({
    email: yup.string().required("Campo de email obrigatório").email("Email inválido"),
    password: yup.string().required("Campo de senha obrigatório")
})


const InputAutomate = styled(TextInput)`
    flex:1;
    color: #000;
    font-size: 17px;
    margin-left: 10px;
`


export function Login({ navigation }) {
    const { signIn } = useAuth();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [Automate, setAutomate] = useState(null);
    const [text, setText] = useState(null);
    const [data, setData] =useState('');
    const [bottomError, setBottomError] = useState('');
    const [connected, setConnected] = useState(false);

    function handleSignin(data) {
        signIn(data.email, data.password).then(result => {
            if(!result.sucess){
                setBottomError(result.error.msg)
            }
        })
    }

    const HandleScan = async () => {
       Scanear().then(r => {setAutomate(r)});
    }
    HandleScan();
    const HandleConnect = async () => {
 
        Connect(Automate).then(device => {
            
            setAutomate(device);
            setConnected(true);
            RNBluetoothClassic.onDeviceRead(device.id, ({ data }) => {console.log(device.available());device.clear();HandleDataRead(data)});
        });
        
    }

    const HandleDisconnect = async () => {
        Disconnect(Automate).then(device => setAutomate(device));
        setConnected(false)
    }

    const HandleMessage = async () => {
       let r = await SendMessage(Automate, text).then(response => {return response});
       
    }

    const HandleDataRead = async (info) => {
       setData(info)
        //console.log(data)
    }
    return (
        <Container>
            <Title>{!Automate? 'Encontrando...': Automate.id}</Title>
            
            <Title>Texto Recebido: {data}</Title>
            <InputsView>

                <Input
                    name="password"
                    control={control}
                    error={errors.password}
                    placeholder="Texto a Ser enviado"
                    iconType={Material}
                    iconName="lock-outline"
                    
                    style={{ marginTop: 10 }}
                    autoCorrect={true}
                    autoCapitalize="none"
                    onChangeText={setText}
                    value={text}
                    
                />


                <Button text="Enviar Mensagem" onPress={HandleMessage} style={{ marginTop: 10 }} />
               
                <Button text="Conectar" onPress={HandleConnect} style={{ marginTop: 10 }} />
                <Button text="Desconectar" onPress={HandleDisconnect} style={{ marginTop: 10 }} />
               

   
                    <BottomText>{}</BottomText>
               
                <ErrorText>{bottomError}</ErrorText>
            </InputsView>
         
            <BottomView>
               
               
            </BottomView>
        </Container>
    )
}
