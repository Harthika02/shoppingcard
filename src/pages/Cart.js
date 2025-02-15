import { CartCard } from "../components/CartCard.js";

export const Cart = () => {
  const products = [
    {"id": 1, "name": "Philips Audio Upbeat Tauh201 Wired On Ear Headphones with mic", "price": 1199, "image": "/assets/img1.jpeg"},
    {"id": 2, "name": "Zebronics Zeb-200HM Wired in Ear Headphone with Mic", "price": 415, "image": "/assets/img2.jpeg"}
  ];

  return (
    <div>
      <section className="cart">
        <h1>Cart items: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};
