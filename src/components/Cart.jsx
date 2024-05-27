import "./Cart.css";

const Cart = ({ house }) => {
  const { photo, title } = house;

  return (
    <section>
      <img className="house-image" src={photo} alt={title} />
    </section>
  );
};

export default Cart;
