import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import { Register } from '../screens/Register'

import { BluetoothConnection } from '../screens/BluetoothConnection'



import {useAuth} from '../hooks/useAuth'
import { useEffect } from 'react'

const Stack = createNativeStackNavigator()

export function InitialRoutes({navigation}){
    const {user} = useAuth()

    useEffect(() => {
        if(user !== null){
            navigation.replace('authRoutes')
        }
    }, [user])
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Bluetooth Connection" component={BluetoothConnection}  />
            <Stack.Screen name="register" component={Register}  />
        </Stack.Navigator>
    )
}