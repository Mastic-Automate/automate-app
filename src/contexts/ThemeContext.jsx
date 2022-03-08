import { useMemo, useState, createContext } from 'react'
import {ThemeProvider} from 'styled-components/native'

import { themes } from '../global/theme'

export const ThemeContext = createContext({})

export function ThemeContextProvider({children}){
    const [theme, setTheme] = useState('light')
    const currentTheme = useMemo(() => themes[theme], [theme])

    function toggleTheme(){
        setTheme(theme === 'light'? 'dark' : 'light')
    }
    
    return (
        <ThemeContext.Provider value={{toggleTheme}}>

            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}