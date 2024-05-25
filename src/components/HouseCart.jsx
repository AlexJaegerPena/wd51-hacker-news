import { houses } from "../data/data";
import { useState } from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const HouseCart = () => {
  const [searchItem, setSearchItem] = useState("");

  // Handle search
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  // Remove SearchedItem
  const removeSearchInput = () => {
    setSearchItem("");
  };

  return (
    <article>
      <form className="search-item-form">
        <input
          type="text"
          name="searchItem"
          id="searchItem"
          placeholder="Search..."
          value={searchItem}
          onChange={handleChange}
          className="input-field"
        />

        <button className="search-item-btn">
          <FiSearch className="search-icon" />
        </button>

        {searchItem.length > 0 && (
          <IoClose onClick={removeSearchInput} className="close-icon" />
        )}
      </form>
      <section>
        <h2 className="title"> Private House </h2>

        <div className="houses-wrapper">
          {houses &&
            houses
              .filter((house) => {
                return searchItem.toLocaleLowerCase().trim() === ""
                  ? house
                  : house.title.toLocaleLowerCase().includes(searchItem);
              })

              .map((house) => {
                return (
                  <article key={house.id} className="house">
                    <figure className="image-container">
                      <img
                        className="image"
                        src={house.photo}
                        alt={house.title}
                      />
                    </figure>
                    <h2> {house.title} </h2>
                    <p> {house.desc} </p>
                  </article>
                );
              })}
        </div>
      </section>
    </article>
  );
};

export default HouseCart;
