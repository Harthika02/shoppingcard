import { useCart } from "../context/CartContext";

export const CartCard = ({product}) => {
  const { removeToCart } = useCart();
  const {image,name,price}=product; 
  return (
    <div>
      <div className="cartcard">
        <img src={image} alt=""/>
        <p>{name}</p>
        <p>${price}</p>
        <button onClick={()=>removeToCart(product)}className="button">Remove</button>
        </div>
        
    </div>
  ) 
}

