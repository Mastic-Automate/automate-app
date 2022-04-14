import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()

import {Config} from '../screens/Config'
import {AccountSettings} from '../screens/AccountSettings'

function ConfigScreensRoutes(){
    return (
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="config-home" component={Config} />
            <stack.Screen name="account" component={AccountSettings} />
        </stack.Navigator>
    )
}

export {ConfigScreensRoutes}