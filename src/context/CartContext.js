import { createContext ,useContext, useReducer} from "react"
import { CardReducer } from "../reducer/CartReducer";
const initialState={
    cartList:[],
    total:0
}
const CartContext=createContext(initialState);
export const CartProvider=({children})=>{

const[state ,dispatch]=useReducer(CardReducer ,initialState)
 const addToCart=(product)=>{
    const updatedCart=state.cartList.concat(product)
    updatetotal(updatedCart)
    dispatch({
        type:"ADD-TO-CART",
        payload:{
            products:updatedCart
        }
    })
 }
   const removeToCart=(product)=>{
    const updatedCart=state.cartList.filter(current=>current.id!==product.id)
    updatetotal(updatedCart)
    dispatch({
        type:"REMOVE-FROM-CART",
        payload:{
            products:updatedCart
        }
    })
  }
  const updatetotal=(product)=>{
    let total=0
    product.forEach(product=>total=total+product.price)
   
    dispatch({
        type:"UPDATED-TOTAL",
        payload:{
            total:total
        }
    })
}
    const value={
        total:state.total,
        cartList:state.cartList,
        addToCart,
        removeToCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
            </CartContext.Provider>
    );
}
export const useCart=()=>{
  const context=useContext(CartContext)
  return context;
}