import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { AuthContextProvider } from './src/contexts/AuthContext'
import {MicrocontrollersContextProvider} from './src/contexts/MicrocontrollersContext'
import {RootRoutes} from './src/routes/RootRoutes'

import { Poppins_400Regular } from '@expo-google-fonts/poppins'
import { AddPlant } from './src/screens/AddPlant';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': Poppins_400Regular
  })
  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <MicrocontrollersContextProvider>
          <NavigationContainer>
            <AddPlant />
          </NavigationContainer>
        </MicrocontrollersContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}
