import CartItem from "./components/CartItem";
import HouseCart from "./components/HouseCart";
import "./components/style.css";
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from "./components/Spinner";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <HouseCart />

          <CartItem />
        </div>
      )}
    </div>
  );
};

export default App;
