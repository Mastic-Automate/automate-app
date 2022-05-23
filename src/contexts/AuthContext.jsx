import { createContext, useState } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    async function signIn(userEmail, userPassword) {
        const requestBody = { userEmail, userPassword }
        try {
            const response = await api.post(`/signin`, requestBody)
            const responseUser = response.data.user
            setUser(responseUser)
            // console.log(user)
        } catch (err) {
            console.log(err)
        }
    }
    async function signUp(userEmail, userName, userPassword) {
        try {
            await api.post(`/signup`, {
                userEmail,
                userName,
                userPassword
            })
            signIn(userEmail, userPassword)
        } catch(err) {
            console.log(err)
        }

    }
    return (
        <AuthContext.Provider value={{ user, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }