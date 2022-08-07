import {StatusBar as Base} from 'react-native'
import {useTheme} from 'styled-components/native'
import { useTheme as useThemeContext } from '../../hooks/useTheme'

export function StatusBar(){
    const theme = useTheme()
    const isDarkTheme = useThemeContext().theme === 'dark'
    return (
        <Base 
            backgroundColor={theme.background1}
            barStyle={isDarkTheme? 'light-content' : 'dark-content'}
        />
    )
}