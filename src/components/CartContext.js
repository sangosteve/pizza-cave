import React,{createContext,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
export const CartContext = createContext();
export const CartProvider = props=>{
    const [cart,total, setCart] = useState([]);

        return(
            <CartContext.Provider value={[cart,setCart]}>
                {props.children}
            </CartContext.Provider>
        )
}