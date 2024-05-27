import Cart from "./components/Cart";
import CartItem from "./components/CartItem";
import HouseCarousel from "./components/HouseCarousel";
import HouseCart from "./components/HouseCart";
import Pagination from "./components/Pagination";
import "./components/style.css";
import { houses } from "./data/data";

const App = () => {
  const houseData = houses.map((house) => (
    <div key={house.id}>
      <Cart house={house} />
    </div>
  ));

  return (
    <div className="app-container">
        <CartItem />
        
      <HouseCart />

      <Pagination />

      <HouseCarousel data={houseData} />

    
    </div>
  );
};

export default App;
