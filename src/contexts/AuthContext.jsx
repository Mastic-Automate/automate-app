import { createContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {api} from '../services/api'

const AuthContext = createContext({})

function AuthContextProvider({ children }) {
    async function signIn(userEmail, userPassword) {
        const requestBody = { userEmail, userPassword }
        try {
            const response = await api.post('/signin', requestBody)

            return {
                sucess:false,
                error: {
                    msg: response.data.msg
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
    async function signUp(userEmail, userName, userPassword) {
        try {
            const response = await api.post('/signup', {
                userEmail,
                userName,
                userPassword
            })
            if(response.data.sucess) {
                signIn(userEmail, userPassword)
                return {
                    sucess:true,
                    error: null
                }
            } 
            return {
                sucess:false,
                error:{
                    msg: response.data.msg
                }
            }
            
        } catch(err) {
            console.log(err)
            return {
                sucess:false,
                error: {
                    msg: 'Erro'
                }
            }
        }

    }

    async function signOut(){
        setUser(null)
        AsyncStorage.removeItem('@UserAuth')
    }

    return (
        <AuthContext.Provider value={{ signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }