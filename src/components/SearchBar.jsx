import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { houses } from "../data/data";
import "./style.css";
import Spinner from "./Spinner";
import { useRef } from "react";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [result, setResult] = useState(null);

  const [loading2, setLoading2] = useState(false);

  /*  useEffect(() => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 3000);
  }); */

  //const isFirstRender = useRef(true);

  /*  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 3000);
  }, []); */

  console.log("search input", searchItem);
  console.log("search result", result);

  // Handle search
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearch = (houseId) => {
    const filteredItems =
      houses && houses.filter((house) => house.id === houseId);
    setResult(filteredItems);
  };

  // Handle on click for the search bar
  const handleClick = () => {
    setSearchItem("");
    setResult("");
  };

  // Remove SearchedItem
  const removeSearchInput = () => {
    setSearchItem("");
  };

  return (
    <div>
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
          <FiSearch
            onClick={() => handleSearch(searchItem)}
            className="search-icon"
          />
        </button>

        {searchItem.length > 0 && (
          <IoClose onClick={removeSearchInput} className="close-icon" />
        )}
        {result && result.length !== 0 ? (
          <article className="search-results">
            {searchResult.map((item) => {
              return (
                <h3
                  onClick={handleClick}
                  key={item.objectID}
                  className="subTitle"
                >
                  {item.author}
                </h3>
              );
            })}
          </article>
        ) : null}
      </form>
    </div>
  );
};

export default SearchBar;
