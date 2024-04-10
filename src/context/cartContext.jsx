import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider({children}){

    const [cart, setCart] = useState([])


    useEffect(() => {
        console.log('useefec1')
        const storedCartItems = localStorage.getItem('cart');
        console.log(storedCartItems)
        if (storedCartItems) {
            setCart(JSON.parse(storedCartItems));
        }
      }, []);

      useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
          }
      }, [cart]);


    const addToCart = product =>{
        console.log(product.id)
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].cantidad += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ... prevState,
            {
                ... product,
                cantidad: 1
            }
        ]))
        console.log(cart)
    }   

    const updateQuantity = (productId, newQuantity) =>{
        const cartItems = [... cart]
        const productIndex = cartItems.findIndex((item) => item.id === productId)
        cartItems[productIndex].cantidad = newQuantity
        setCart(cartItems)
    }

    const removeFromCart = product =>{
        if(cart.length === 1){
            console.log('1cart')
            setCart([])
            localStorage.setItem('cart', JSON.stringify([]));
        }
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}