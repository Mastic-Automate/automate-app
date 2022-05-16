import {createContext, useState} from 'react'

import {api} from '../services/api'

const AuthContext = createContext({})

function AuthContextProvider({children}){
    const [user, setUser] = useState(null)
    async function signIn(userEmail, userPassword){
        const requestBody = {userEmail, userPassword}
        try {
            const response = await api.post('/signin', requestBody)
            console.log(response)
        } catch(err) {
            console.log(err)
        }
    }
    function signUp(userEmail, userName, userPassword){
        api.post('/signin')
    }   
    return (
        <AuthContext.Provider value={{user, signIn, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext}