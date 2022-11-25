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
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: theme.background1 },
        headerTintColor: theme.text2,
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
        if (!user) {
            navigation.replace('InitialRoutes')
        }
    }, [user])
    return (
        <Nav.Navigator
            drawerContent={SideBar}
        >
            <Nav.Screen name="home" component={Home} options={{
                headerTitle: 'Automate',
                headerTitleStyle: {
                    fontFamily: "ProximaNovaSemiBold",
                    fontSize: 24,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: theme.background1 },
                    headerTintColor: theme.text2,
                    headerRight: () => (
                        <Ionicons
                            name="settings-outline"
                            color={theme.text2}
                            size={35}
                            onPress={() => navigation.replace('authRoutes', { screen: 'config' })}
                            style={{ margin: 10, marginRight: 20 }}
                        />
                    )
                }
            }}
            />

            <Nav.Screen name="plants" component={Plants} options={{ ...defaultScreenOptions, headerShown: false }} />
            <Nav.Screen name="plantsManagement" component={PlantsManagementRoutes} options={{ ...defaultScreenOptions, headerTitle: 'Plantas' }} />
            <Nav.Screen name="plantInfo" component={InfoPlant} options={{ headerShown: false }} />
            <Nav.Screen name="config" component={ConfigScreensRoutes} screenOptions={{ ...defaultScreenOptions, headerTitle: 'Configurações' }} />
        </Nav.Navigator>
    )
}