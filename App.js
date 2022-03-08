import {NavigationContainer} from '@react-navigation/native'


import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { InitialRoutes } from './src/routes/InitialRoutes'

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <InitialRoutes />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
