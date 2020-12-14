import {React,useState,useContext} from 'react';
import {MenuContext} from './MenuContext';
import {CartContext} from './CartContext';
import Cart from './Cart';
import './Menu.css'

function Menu(){
    const [products,setProducts] = useContext(MenuContext);
    const [cart,setCart] = useContext(CartContext);
    const addToCart =product=>{
        setCart([...cart,product]);
        console.log([...cart])

    }
    return (
        <div className="Menu">
           
            <div className="product-card-wrapper">
           {
               products.map(product=>(
                <div className="product-card">
                <div className="img-wrapper">
                <img src={product.image}/>
                </div>
                <div className="product-description">
                <span className="prod-name">{product.name}</span>    
                <span className="price"><small>{product.category}</small></span>
                <span className="name">${product.price}</span>
                
                </div>
    
                <button className="btn-add-to-cart" onClick={()=>addToCart(product)}>Order Now</button>
    
              </div>
               ))
           } 
            </div>
            <Cart/>
        </div>
    )
}

export default Menu;