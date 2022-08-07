import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import {StatusBar} from './src/components/StatusBar'

import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { AuthContextProvider } from './src/contexts/AuthContext'
import {MicrocontrollersContextProvider} from './src/contexts/MicrocontrollersContext'
import {RootRoutes} from './src/routes/RootRoutes'

import { Poppins_400Regular } from '@expo-google-fonts/poppins'

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
            <StatusBar />
            <RootRoutes />
          </NavigationContainer>
        </MicrocontrollersContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}
