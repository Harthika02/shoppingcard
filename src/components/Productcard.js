
export const Productcard = ({product}) => {

 
  return (
    <div className="Productcard">
        <img src={product.image} alt=""/>
        <span>{product.name}</span>
        <div className="Action">
        <span>${product.price}</span>
        <button className="button">Add to card</button>
        </div>
    </div>
  )
}
