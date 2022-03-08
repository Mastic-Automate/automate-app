import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Config } from '../screens/Config'
import { Home } from '../screens/Home'

const Nav = createBottomTabNavigator()

export function MainRoutes(){
    return (
        <Nav.Navigator screenOptions={{headerShown: false}}>
            <Nav.Screen name="home" component={Home} />
            <Nav.Screen name="config" component={Config} />
        </Nav.Navigator>
    )
}