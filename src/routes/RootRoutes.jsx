import {AuthRoutes} from './Auth.routes'
import {InitialRoutes} from './InitialRoutes'
import { Home } from '../screens/Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function RootRoutes(){

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="InitialRoutes" component={InitialRoutes} />
            <Stack.Screen name="authRoutes" component={AuthRoutes} />
        </Stack.Navigator>
    )
}

export {RootRoutes}