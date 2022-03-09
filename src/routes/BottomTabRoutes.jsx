import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'

import { Config } from '../screens/Config'
import { Home } from '../screens/Home'
import { Videos } from '../screens/Videos'
import { PlantsManagementRoutes } from './PlantsManagementRoutes'

const Nav = createBottomTabNavigator()

export function BottomTabRoutes(){
    return (
        <Nav.Navigator screenOptions={{headerShown: false}}>
            <Nav.Screen name="home" component={Home} />
            <Nav.Screen name="plantsManagement" component={PlantsManagementRoutes} options={{title: 'Plantas'}} />
            <Nav.Screen name="videos" component={Videos} options={{title: 'Vídeos' }} />
            <Nav.Screen name="config" component={Config} />
        </Nav.Navigator>
    )
}