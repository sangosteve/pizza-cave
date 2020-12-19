import React,{useState,useContext} from 'react' 
import './Cart.css'
import { CartContext } from './CartContext';
function Cart (){
    const [cart,setCart] = useContext(CartContext);
    const [lineTotal,setLineTotal] = useState(0)
  
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
            <td>subtotal</td>
            <td></td>
            </tbody>
            </table>
        </div>
    )
}

export default Cart