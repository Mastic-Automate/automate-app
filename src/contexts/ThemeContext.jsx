import { useMemo, useState, createContext, useEffect } from 'react'
import {ThemeProvider} from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { themes } from '../global/theme'

export const ThemeContext = createContext({})

export function ThemeContextProvider({children}){
    const [theme, setTheme] = useState(null)
    const currentTheme = useMemo(() => themes[theme], [theme])

    const [isThemeLoading, setIsThemeLoading] = useState(true)

    function toggleTheme(){
        setTheme(theme === 'light'? 'dark' : 'light')
    }

    useEffect(()=>{
        if(!!theme) {
            AsyncStorage.setItem('@AppTheme', theme)
        }
    }, [theme])

    useEffect(()=> {
        AsyncStorage.getItem('@AppTheme').then(result => {
            if(!!result){
                return setTheme(result)
            }
            setTheme('light')
            setIsThemeLoading(false)
        })
    }, [])
    
    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {!isThemeLoading && (
                <ThemeProvider theme={currentTheme}>
                    {children}
                </ThemeProvider>
            )}

        </ThemeContext.Provider>
    )
}