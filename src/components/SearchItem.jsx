import axios from "axios";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const SearchItem = ({ items, setItems, searchedItem, setSearchedItem }) => {
  const [searchResult, setSearchResult] = useState(null);

  const fetchData = async () => {
    const date = new Date(searchedItem).getTime();

    try {
      const { data } = await axios.get(
        `http://hn.algolia.com/api/v1/search_by_date?tags=${searchedItem}`
      );
      setItems(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchedItem]);

  // Handle search
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchedItem(term);
  };

  const handleSearch = (author) => {
    const filteredItems =
      items && items.filter((item) => item.author === author);
    setSearchResult(filteredItems);
  };

  // Handle on click for the search bar
  const handleClick = () => {
    setSearchedItem("");
    setSearchResult("");
  };

  // Remove SearchedItem
  const removeSearchInput = () => {
    setSearchedItem("");
  };

  return (
    <form className="search-item-form">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search..."
        value={searchedItem}
        onChange={handleSearchChange}
        className="input-field"
      />

      <button className="search-item-btn">
        <FiSearch
          onClick={() => handleSearch(searchedItem)}
          className="search-icon"
        />
      </button>

      {searchedItem.length > 0 && (
        <IoClose onClick={removeSearchInput} className="close-icon" />
      )}
      {searchResult && searchResult.length !== 0 ? (
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
  );
};

export default SearchItem;
