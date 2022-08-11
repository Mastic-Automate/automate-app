import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import {StatusBar} from './src/components/StatusBar'

import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { AuthContextProvider } from './src/contexts/AuthContext'
import {MicrocontrollersContextProvider} from './src/contexts/MicrocontrollersContext'
import {RootRoutes} from './src/routes/RootRoutes'

import { Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins'
import {
  Montserrat_900Black,
  Montserrat_700Bold,
  Montserrat_500Medium,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': Poppins_400Regular,
    'Poppins700': Poppins_700Bold,
    'ProximaNova': require('./assets/fonts/proximaNova/ProximaNovaBold.otf'),
    'SuperaGothic': require('./assets/fonts/SuperaGothic/SuperaGothic-ExtraBold.otf'),
    'MusticaPro':require('./assets/fonts/Mustica/MusticaPro-SemiBold.otf'),
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_900Black,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
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
