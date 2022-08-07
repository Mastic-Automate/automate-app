import {createDrawerNavigator} from '@react-navigation/drawer'

import { Home } from '../screens/Home'
import { PlantsManagementRoutes } from './PlantsManagementRoutes'
import {ConfigScreensRoutes} from './ConfigScreensRoutes'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import { SideBar } from '../components/SideBar'
import { useTheme } from 'styled-components'
import {Ionicons} from '@expo/vector-icons'

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
        if(user === null){
            navigation.replace('initialRoutes')
        }
    }, [user])
    return (
        <Nav.Navigator 
            drawerContent={SideBar} 
        >
            <Nav.Screen name="home" component={Home} options={defaultScreenOptions} />
            <Nav.Screen name="plantsManagement" component={PlantsManagementRoutes} options={{...defaultScreenOptions, headerTitle: 'Plantas'}} />
            <Nav.Screen name="config" component={ConfigScreensRoutes} options={{...defaultScreenOptions, headerTitle:'Configurações'}} />
        </Nav.Navigator>
    )
}