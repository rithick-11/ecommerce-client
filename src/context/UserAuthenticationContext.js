import React, { useEffect, useState } from 'react'
import server from "../config/apiConfig"

export const UserAuthenticationContext = React.createContext({})

const UserAuthenticationContextProvider = ({children }) => {

    const [user, setUser] = useState({isAunthenticated: false, userInfo: {}})

    const getUserAuthentication = async () => {
        try{
            const res = await server.get("/api/users/authentication")
            setUser(pre => ({isAunthenticated: true, userInfo: res.data.user}))
        }catch(err){
            console.log(err.response)
        }
    } 

    useEffect(() => {
        getUserAuthentication()
    } ,[])

    return <UserAuthenticationContext.Provider  value={{user ,getUserAuthentication, setUser}} >
        {children }
    </UserAuthenticationContext.Provider>
}

export default UserAuthenticationContextProvider