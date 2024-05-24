import { useState } from "react";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";

function App() {
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
    <div>
      <h1>Our hacker news</h1>
    </div>
  );
}

export default App;
