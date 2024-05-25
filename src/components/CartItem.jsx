import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const CartItem = () => {
  const [items, setItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  // Handle search
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  // Remove SearchedItem
  const removeSearchInput = () => {
    setSearchItem("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://hn.algolia.com/api/v1/search_by_date?query=`
        );
        setItems(data.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="authors-container">
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
      <h2 className="title"> Authors </h2>
      <div className="cart-item-wrapper">
        {items &&
          items
            .filter((item) => {
              return searchItem.toLocaleLowerCase().trim() === ""
                ? item
                : item.author.toLocaleLowerCase().startsWith(searchItem);
            })
            .map((data) => {
              return (
                <article key={data.objectID} className="cart-item">
                  <h1> {data?.author} </h1>
                  <h4> {data.story_title}</h4>
                  <p> {data.comment_text?.substring(0, 200)}</p>
                  <p> {data?._tags.map((e) => e)} </p>
                  <p>
                    Created At: <strong>{data?.created_at.slice(0, 10)}</strong>{" "}
                  </p>
                </article>
              );
            })}
      </div>
    </section>
  );
};

export default CartItem;
