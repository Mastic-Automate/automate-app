import {NavigationContainer} from '@react-navigation/native'

import {useFonts} from 'expo-font'

import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { InitialRoutes } from './src/routes/InitialRoutes'

import {Poppins_400Regular} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins':Poppins_400Regular
  })
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <InitialRoutes />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
