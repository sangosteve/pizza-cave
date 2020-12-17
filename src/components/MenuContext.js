import React,{createContext,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
export const MenuContext = createContext();
export const MenuProvider = props=>{
    const [products, setProducts] = useState([
        { id:uuidv4(),
          name:"PEPPERONI",
          image:"./images/uploads/pepperoni-pizza1.png",
          category:"pizza",
          price:230
        },
        {
          id:uuidv4(),
          name:"HAWAIIAN",
          image:"./images/uploads/pepperoni-pizza.png",
          category:"pizza",
          price:129
        },
        {
          id:uuidv4(),
          name:"SILICIAN",
          image:"./images/uploads/pepperoni-pizza.png",
          category:"pizza",
          price:45
        },
        { id:uuidv4(),
          name:"PEPPERONI",
          image:"./images/uploads/pepperoni-pizza1.png",
          category:"pizza",
          price:230
        },
        {
          id:uuidv4(),
          name:"HAWAIIAN",
          image:"./images/uploads/pepperoni-pizza.png",
          category:"pizza",
          price:129
        },
        {
          id:uuidv4(),
          name:"SILICIAN",
          image:"./images/uploads/pepperoni-pizza.png",
          category:"pizza",
          price:45
        }
        
        ]);

        return(
            <MenuContext.Provider value={[products,setProducts]}>
                {props.children}
            </MenuContext.Provider>
        )
}