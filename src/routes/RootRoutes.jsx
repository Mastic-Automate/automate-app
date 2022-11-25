import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthRoutes } from './Auth.routes'
import { InitialRoutes } from './InitialRoutes'

const Stack = createNativeStackNavigator()

function RootRoutes() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="InitialRoutes" component={InitialRoutes} />
            <Stack.Screen name="authRoutes" component={AuthRoutes} />
        </Stack.Navigator>
    )
}

export { RootRoutes }
