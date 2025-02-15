export const CartCard = ({product}) => {
  const {image,name,price}=product; 
  return (
    <div>
      <div className="cartcard">
        <img src={image} alt=""/>
        <p>{name}</p>
        <p>${price}</p>
        <button className="button">Remove</button>
        </div>
        
    </div>
  ) 
}

