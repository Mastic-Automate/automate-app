import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import { Register } from '../screens/Register'

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
            <Stack.Screen name="login" component={Login}  />
            <Stack.Screen name="register" component={Register}  />
        </Stack.Navigator>
    )
}