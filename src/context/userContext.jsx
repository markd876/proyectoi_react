import axios from '../api/axios'
import { createContext, useState, useEffect,useContext } from 'react'

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
export const useUserContext = () => {
    const context = useContext(UserContext);
    console.log(context)
    if (context === undefined) {
        throw new Error('useUserContext debe ser utilizado dentro de un UserContextProvider');
    }
    return context;
};
