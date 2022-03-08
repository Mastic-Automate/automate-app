import {NavigationContainer} from '@react-navigation/native'


import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { Home } from './src/screens/Home';
import { InitialRoutes } from './src/routes/initialRoutes'

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <InitialRoutes />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
