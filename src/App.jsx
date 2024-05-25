import CartItem from "./components/CartItem";
import HouseCart from "./components/HouseCart";
import "./components/style.css";

const App = () => {
  return (
    <div className="app-container">
  
      <HouseCart />

      <CartItem />
    </div>
  );
};

export default App;
