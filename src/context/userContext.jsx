import axios from '../api/axios'
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) =>{
    const [user,setUser] = useState(null)
    useEffect(()=>{
        if(!user){
            axios.get('/profile',{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }).then(({data})=>{
                setUser(data)
            })
        }
    },[])
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
