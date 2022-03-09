import {View, Button, Text} from 'react-native'

export function Login({navigation}){
    function signIn(){
        navigation.replace('main')
    }
    return (
        <View>
            <Text>Login aqui</Text>
            <Button title="Login" onPress={signIn} />
            <Text>Ainda não possui uma conta?</Text>
            <Button onPress={()=> navigation.replace('register')} title="Registrar-se" />
        </View>
    )
}