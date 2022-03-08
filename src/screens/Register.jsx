import {View, Button, Text} from 'react-native'

export function Register({navigation}){

    return (
        <View>
            <Text>Se registre aqui</Text>
            <Text>Já possui uma conta?</Text>
            <Button onPress={()=> navigation.replace('login')} title="Login" />
        </View>
    )
}