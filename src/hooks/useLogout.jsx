import axios from '../api/axios'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

const useLogout = () =>{
    const {user, setUser} = useContext(UserContext) 
    const logout = async () =>{
        setUser(null)
        console.log(user)
        try {
            const response = await axios.post('/logout',{},{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            })
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    return logout
}

export default useLogout