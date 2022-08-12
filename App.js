import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import {StatusBar} from './src/components/StatusBar'

import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { AuthContextProvider } from './src/contexts/AuthContext'
import {MicrocontrollersContextProvider} from './src/contexts/MicrocontrollersContext'
import {RootRoutes} from './src/routes/RootRoutes'

import { 
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'
import {
  Montserrat_900Black,
  Montserrat_700Bold,
  Montserrat_500Medium,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat'
import { Actor_400Regular } from '@expo-google-fonts/actor'
import {
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold
} from '@expo-google-fonts/oswald'
import { AddPlant } from './src/screens/AddPlant';
import {SavePlant} from './src/screens/SavePlant'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': Poppins_400Regular,
    'Poppins700': Poppins_700Bold,
    'Poppins600':Poppins_600SemiBold,
    'ProximaNova': require('./assets/fonts/proximaNova/ProximaNovaBold.otf'),
    'SuperaGothic': require('./assets/fonts/SuperaGothic/SuperaGothic-ExtraBold.otf'),
    'SuperaGothic400': require('./assets/fonts/SuperaGothic/SuperaGothic-Regular.otf'),
    'MusticaPro':require('./assets/fonts/Mustica/MusticaPro-SemiBold.otf'),
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_900Black,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
    'actor':Actor_400Regular,
    'Oswald200': Oswald_200ExtraLight,
    'Oswald300':Oswald_300Light,
    'Oswald400':Oswald_400Regular,
    'Oswald500':Oswald_500Medium,
    'Oswald600':Oswald_600SemiBold,
    'Oswald700':Oswald_700Bold
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
            <SavePlant />
          </NavigationContainer>
        </MicrocontrollersContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}
