import { useCart } from "../context/CartContext.js";
import { CartCard } from "../components/CartCard.js";


export const Cart = () => {
  const {total,cartList}=useCart();

  return (
    <div>
      <section className="cart">
        <h1>Cart items: {cartList.length}/${total}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};
