import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import { Register } from '../screens/Register'
import { MainRoutes } from './MainRoutes'

const Stack = createNativeStackNavigator()

export function InitialRoutes(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="login" component={Login}  />
            <Stack.Screen name="register" component={Register}  />
            <Stack.Screen name="main" component={MainRoutes}  />
        </Stack.Navigator>
    )
}