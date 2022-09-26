import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useTheme } from 'styled-components/native'
import { Plants } from '../screens/Plants'
import { EditPlant } from '../screens/EditPlant'
import { InfoPlant } from '../screens/InfoPlant'
import {BluetoothConnection} from '../screens/BluetoothConnection'
import {AddPlant} from '../screens/AddPlant/selectedPlant'

const Nav = createNativeStackNavigator()
// São todas as rotas que estão relacionadas com as configurações de planta e conexão bluetooth
export function PlantsManagementRoutes(){
    return (
        <Nav.Navigator screenOptions={{headerShown:false}}>
            <Nav.Screen name="bluetooth-connection" component={BluetoothConnection} />
            <Nav.Screen name="add-plant" component={AddPlant} />
            <Nav.Screen name="edit-plant" component={EditPlant} />
        </Nav.Navigator>
    )
}