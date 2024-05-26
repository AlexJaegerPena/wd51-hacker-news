import CartItem from "./components/CartItem";
import HouseCart from "./components/HouseCart";
import "./components/style.css";
import ClipLoader from "react-spinners/ClipLoader";
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

  return loading ? (
    <ClipLoader color={"green"} loading={loading} size={100} />
  ) : (
    <div className="app-container">
      <HouseCart />

      <CartItem />
    </div>
  );
};

export default App;
