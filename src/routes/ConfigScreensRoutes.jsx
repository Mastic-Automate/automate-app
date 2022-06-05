import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()

import {Config} from '../screens/Config'
import {AccountSettings} from '../screens/AccountSettings'

import {useTheme} from 'styled-components/native'

function ConfigScreensRoutes(){
    const {primary} = useTheme()
    return (
        <stack.Navigator screenOptions={{headerShown:true, headerTransparent:true, headerTitle:'', headerTintColor:primary}}>
            <stack.Screen name="config-home" component={Config} />
            <stack.Screen name="account" component={AccountSettings} />
        </stack.Navigator>
    )
}

export {ConfigScreensRoutes}