import React,{useState,useContext} from 'react' 
import './Cart.css'
import { CartContext } from './CartContext';
function Cart (){
    const [cart,setCart] = useContext(CartContext);
    return(
        <div className="Cart">
            <h3>Cart Menu</h3>
            <ul>
            {
                cart.map(product=>(
                    <li><span>{product.name}</span><span>{product.price}</span></li>
                ))
            }
            </ul>
        </div>
    )
}

export default Cart