import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useTheme } from 'styled-components/native'
import { Plants } from '../screens/Plants'
import { EditPlant } from '../screens/EditPlant'
import { InfoPlant } from '../screens/InfoPlant'
import {BluetoothConnection} from '../screens/BluetoothConnection'
import {AddPlant} from '../screens/AddPlant'

const Nav = createNativeStackNavigator()

export function PlantsManagementRoutes(){
    const {primary} = useTheme()
    return (
        <Nav.Navigator screenOptions={{headerShown:true, headerTransparent:true, headerTitle:'', headerTintColor:primary}}>
            <Nav.Screen name="plants" component={Plants} />
            <Nav.Screen name="bluetooth-connection" component={BluetoothConnection} />
            <Nav.Screen name="add-plant" component={AddPlant} />
            <Nav.Screen name="edit-plant" component={EditPlant} />
            <Nav.Screen name="info-plant" component={InfoPlant} />
        </Nav.Navigator>
    )
}