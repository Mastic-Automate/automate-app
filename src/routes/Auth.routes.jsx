import {createDrawerNavigator} from '@react-navigation/drawer'

import { Home } from '../screens/Home'
import { PlantsManagementRoutes } from './PlantsManagementRoutes'
import {ConfigScreensRoutes} from './ConfigScreensRoutes'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import { SideBar } from '../components/SideBar'
import { useTheme } from 'styled-components'
import {Ionicons} from '@expo/vector-icons'
import { Plants } from '../screens/Plants'
import { InfoPlant } from '../screens/InfoPlant'
import { AddPlant } from '../screens/AddPlant'
import { DatabasePlantsContextProvider } from '../contexts/DatabasePlantsContext'

const Nav = createDrawerNavigator()

export function AuthRoutes({navigation}){
    const {user} = useAuth()
    const theme = useTheme()

    const defaultScreenOptions = {
        headerTitle:'Automate',
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:theme.background1},
        headerTintColor:theme.text2,
        headerRight: () => (
            <Ionicons 
                name="settings-outline"
                color={theme.text2}
                size={40}
                onPress={()=> navigation.replace('authRoutes', {screen: 'config'})}
                style={{margin:5}}
            />
        )
    }

    useEffect(() => {
        if(!user){
            navigation.replace('InitialRoutes')
        }
    }, [user])
    return (
        <DatabasePlantsContextProvider>
            
            <Nav.Navigator 
                drawerContent={SideBar} 
            >
                <Nav.Screen 
                    name="home"
                    component={Home}
                />
                <Nav.Screen name="plants" component={Plants} options={{...defaultScreenOptions, headerShown:false}} />
                <Nav.Screen name="plantsManagement" component={PlantsManagementRoutes} options={{...defaultScreenOptions, headerTitle: 'Plantas'}} />
                <Nav.Screen name="plantInfo" component={InfoPlant} options={{headerShown:false}} />
                <Nav.Screen name="config" component={ConfigScreensRoutes} screenOptions={{...defaultScreenOptions, headerTitle:'Configurações'}} />
            </Nav.Navigator>
        </DatabasePlantsContextProvider>
    )
}