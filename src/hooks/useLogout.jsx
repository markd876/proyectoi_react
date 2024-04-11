import axios from '../api/axios'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/userContext'
import { useCart } from "../hooks/useCart";


const useLogout = () =>{
    const navigate = useNavigate()
    const { cart, clearCart } = useCart()
    const {user, setUser} = useContext(UserContext) 
    const logout = async () =>{
        clearCart()
        localStorage.setItem('cart', JSON.stringify([]));
        setUser(null)
        console.log(user)
        navigate('/')
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