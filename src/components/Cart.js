import React,{useState,useContext} from 'react' 
import './Cart.css'
import { CartContext } from './CartContext';
function Cart (){
    const [cart,setCart] = useContext(CartContext);
    
    
const getOrderTotal=()=>{
    const res = cart.reduce((prev,item)=>{
        return prev+(item.price*item.units);
    },0)

    //setTotal({total:res});
}
    return(
        <div className="Cart">
            <h3>Cart Menu</h3>
            <table>
                <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                
            {
                cart.map(product=>(
                    <tr>
                    <td>{product.name}</td>
                    <td>{product.units} X {product.price}</td>
                    <td>{product.units*product.price}</td>
                    </tr>
                ))
            }
            <td></td>
            <td>{getOrderTotal()}</td>
            <td></td>
            </tbody>
            </table>
        </div>
    )
}

export default Cart