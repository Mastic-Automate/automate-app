import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'
import { Videos } from '../screens/Videos'
import { PlantsManagementRoutes } from './PlantsManagementRoutes'
import { BottomTabBar } from '../components/BottomTabBar'
import {ConfigScreensRoutes} from './ConfigScreensRoutes'
import {useAuth} from '../hooks/useAuth'
import { useEffect } from 'react'

const Nav = createBottomTabNavigator()

export function AuthRoutes({navigation}){
    const {user} = useAuth()

    useEffect(() => {
        if(user === null){
            navigation.replace('initialRoutes')
        }
    }, [user])
    return (
        <Nav.Navigator screenOptions={{headerShown: false}} tabBar={props => <BottomTabBar {...props} />}>
            <Nav.Screen name="home" component={Home} />
            <Nav.Screen name="plantsManagement" component={PlantsManagementRoutes} options={{title: 'Plantas'}} />
            <Nav.Screen name="videos" component={Videos} options={{title: 'Vídeos' }} />
            <Nav.Screen name="config" component={ConfigScreensRoutes} />
        </Nav.Navigator>
    )
}