import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}
