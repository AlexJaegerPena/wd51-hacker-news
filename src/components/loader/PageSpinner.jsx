import { ColorRing } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="loader-container ">
      <ColorRing
        visible={true}
        ariaLabel="blocks-loading"
        wrapperStyle={{ width: "10rem", height: "10rem" }}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default PageLoader;
