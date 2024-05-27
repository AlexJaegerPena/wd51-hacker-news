import React from "react";
import { ColorRing } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="loader-container ">
      <ColorRing
        visible={true}
        ariaLabel="blocks-loading"
        wrapperStyle={{ width: "30rem", height: "30rem" }}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default Spinner;
