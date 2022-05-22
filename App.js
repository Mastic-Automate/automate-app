import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { AuthContextProvider } from './src/contexts/AuthContext'
import { InitialRoutes } from './src/routes/InitialRoutes'

import { Poppins_400Regular } from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': Poppins_400Regular
  })
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <NavigationContainer>
          {fontsLoaded ? (
            <InitialRoutes />
          ) : (
            <AppLoading />
          )}
        </NavigationContainer>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}
