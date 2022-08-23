import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { EditPlant } from '../screens/EditPlant'
import {BluetoothConnection} from '../screens/BluetoothConnection'
import {AddPlant} from '../screens/AddPlant'
import { SavePlant } from '../screens/SavePlant'
import {ConnectPlant} from '../screens/ConnectPlant'
import { PlantsManagementContextProvider } from '../contexts/PlantsManagementContext'
import { BluetoothConnectionContextProvider } from '../contexts/BLuetoothConnectionContext'

const Nav = createNativeStackNavigator()
// São todas as rotas que estão relacionadas com as configurações de planta e conexão bluetooth
export function PlantsManagementRoutes(){
    return (
        <BluetoothConnectionContextProvider>
            <PlantsManagementContextProvider>
                <Nav.Navigator screenOptions={{headerShown:false}}>
                    <Nav.Screen name="bluetooth-connection" component={BluetoothConnection} />
                    <Nav.Screen name="add-plant" component={AddPlant} />
                    <Nav.Screen name="save-plant" component={SavePlant} />
                    <Nav.Screen name="connect-plant" component={ConnectPlant} />
                </Nav.Navigator>
            </PlantsManagementContextProvider>
        </BluetoothConnectionContextProvider>
    )
}