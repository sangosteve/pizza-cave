import {React,useState,useContext} from 'react';
import {MenuContext} from './MenuContext';
import {CartContext} from './CartContext';
import Cart from './Cart';
import './Menu.css'

function Menu(){
    const [products,setProducts] = useContext(MenuContext);
    const [cart,setCart] = useContext(CartContext);
    const addToCart = product=>{
            //set product units
    product.units = 1;

    //CHECK IF PRODUCT ALREADY EXISTS IN THE CART,IF EXISTANT STORE THE PRODUCT OBJECT IN A VARIABLE
    const exist = cart.find(p=>p.id===product.id);
    
    if(exist){
      setCart(cart.map(item=>item.id===exist.id?{...exist,units:exist.units+1}:item))
      //setProductCart([...product_cart,item]);
     // console.log([...cart])
    }else{
      setCart([...cart,{...product,units:1}]);
      //console.log([...cart])
    }

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