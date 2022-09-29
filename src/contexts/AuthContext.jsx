import { createContext, useEffect, useState } from 'react'

import {api} from '../services/api'
import { useUserInfo } from '../hooks/useUserInfo'

const AuthContext = createContext({})

function AuthContextProvider({ children }) {
    const {data: user, refetch} = useUserInfo()
    async function signIn(userEmail, userPassword) {
        const requestBody = { userEmail, userPassword }
        try {
            const response = await api.post('/signin', requestBody)
            await refetch()

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
        await api.get('/signOut')
        await refetch()
    }

    return (
        <AuthContext.Provider value={{ signIn, signUp, signOut, user: user }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }