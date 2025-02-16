import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const Productcard = ({ product }) => {
  const { addToCart,cartList,removeToCart} = useCart();
  const[incard ,setIncard]=useState("true")
  const {id,name,price,image}=product
  useEffect(()=>{
    const handleAddCard=cartList.find(cartitem=>cartitem.id===id)
    if(handleAddCard){
   setIncard(false)
    }
    else{
      setIncard(true)
    }
  },[cartList ,id])

  return (
    <div className="Productcard">
      <img src={image} alt={name} />
      <span>{name}</span>
      <div className="Action">
        <span>${price}</span>
        {incard?(<button onClick={()=>addToCart(product)} className="button">Add to Cart</button>):(<button onClick={()=>removeToCart(product)} className="button">remove</button>)}
      </div>
    </div>
  );
};

