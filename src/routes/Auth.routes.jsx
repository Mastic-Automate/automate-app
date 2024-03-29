// animation
import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useEffect } from 'react'
import { useTheme } from 'styled-components'
import { SideBar } from '../components/SideBar'
import { useAuth } from '../hooks/useAuth'
import { Home } from '../screens/Home'
import { InfoPlant } from '../screens/InfoPlant'
import { Plants } from '../screens/Plants'

import { ConfigScreensRoutes } from './ConfigScreensRoutes'
import { PlantsManagementRoutes } from './PlantsManagementRoutes'


const Nav = createDrawerNavigator()

export function AuthRoutes({ navigation }) {
    const { user } = useAuth()
    const theme = useTheme()

    const defaultScreenOptions = {
        headerTitle: 'Automate',
        headerRight: () => (
            <Ionicons
                name="settings-outline"
                color={theme.text2}
                size={40}
                onPress={() => navigation.replace('authRoutes', { screen: 'config' })}
                style={{ margin: 5 }}
            />
        )
    }

    useEffect(() => {
        if (user === null) {
            navigation.replace('InitialRoutes')
        }
    }, [user])

    return (
        <Nav.Navigator
            drawerContent={SideBar}
        >

            <Nav.Screen name="home" component={Home} options={{
                headerShown: false,
                headerTitle: 'Automate',
                headerTitleStyle: {
                    fontFamily: "ProximaNovaSemiBold",
                    fontSize: 24,
                    headerRight: () => (
                        <Ionicons
                            name="settings-outline"
                            color={theme.text2}
                            size={32}
                            onPress={() => navigation.replace('authRoutes', { screen: 'config' })}
                            style={{ margin: 10, marginRight: 20 }}
                        />
                    )
                }
            }}
            />

            <Nav.Screen name="plants" component={Plants} options={{ ...defaultScreenOptions, headerShown: false }} />
            <Nav.Screen name="plantsManagement" component={PlantsManagementRoutes} options={{ ...defaultScreenOptions, headerShown: false }} />
            <Nav.Screen name="plantInfo" component={InfoPlant} options={{ headerShown: false }} />
            <Nav.Screen name="config" component={ConfigScreensRoutes} options={{ ...defaultScreenOptions, headerShown: false }} />
        </Nav.Navigator>
    )
}