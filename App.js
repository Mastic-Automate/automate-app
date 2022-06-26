import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { AuthContextProvider } from './src/contexts/AuthContext'
import {MicrocontrollersContextProvider} from './src/contexts/MicrocontrollersContext'
import {RootRoutes} from './src/routes/RootRoutes'

import { Poppins_400Regular } from '@expo-google-fonts/poppins'
import { Home } from './src/screens/Home';

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
            <Home />
          </NavigationContainer>
        </MicrocontrollersContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}
