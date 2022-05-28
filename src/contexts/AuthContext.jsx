import { createContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {API_BASE_URL} from '@env'
import axios from 'axios'

const AuthContext = createContext({})

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    async function signIn(userEmail, userPassword) {
        const requestBody = { userEmail, userPassword }
        try {
            const response = await axios.post(`${API_BASE_URL}/signin`, requestBody)
            if(response.data.sucess){
                const responseUser = response.data.user
                setUser(responseUser)
                AsyncStorage.setItem('@UserAuth', JSON.stringify({
                    email:userEmail,
                    password:userPassword
                }))
                return {
                    sucess:true,
                    error: null
                }
            }

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
            const response = await axios.post(`${API_BASE_URL}/signup`, {
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

    async function signInOnSetup(){
        const jsonAuthData = await AsyncStorage.getItem('@UserAuth')
        if(!!jsonAuthData) {
            const authData = JSON.parse(jsonAuthData)
            signIn(authData.email, authData.password)
        }
    }

    useEffect(() => {
        signInOnSetup()
    }, [])

    return (
        <AuthContext.Provider value={{ user, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }