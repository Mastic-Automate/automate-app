import {AuthRoutes} from './Auth.routes'
import {InitialRoutes} from './InitialRoutes'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function RootRoutes(){

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="initialRoutes" component={InitialRoutes} />
            <Stack.Screen name="authRoutes" component={AuthRoutes} />
        </Stack.Navigator>
    )
}

export {RootRoutes}