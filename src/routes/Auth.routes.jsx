import {createDrawerNavigator} from '@react-navigation/drawer'

import { Home } from '../screens/Home'
import { PlantsManagementRoutes } from './PlantsManagementRoutes'
import {ConfigScreensRoutes} from './ConfigScreensRoutes'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import { SideBar } from '../components/SideBar'
import { useTheme } from 'styled-components'
import { useMemo } from 'react'

const Nav = createDrawerNavigator()

export function AuthRoutes({navigation}){
    const {user} = useAuth()
    const theme = useTheme()

    const defaultScreenOptions = useMemo(()=> {
        return {
            headerTitle:'Automate',
            headerTitleAlign:'center',
            headerStyle:{backgroundColor:theme.background1},
            headerTintColor:theme.text2
        }
    }, [])

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