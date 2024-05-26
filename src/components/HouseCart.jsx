import React, { useState } from "react";
import { houses } from "../data/data";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Pagination from "./Pagination";

const HouseCart = () => {
  const [searchItem, setSearchItem] = useState("");

  //---------------- pagination code changes-------------------
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  //----------------------------------------------------

  // Handle search
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  // Remove SearchedItem
  const removeSearchInput = () => {
    setSearchItem("");
  };
  //------------- pagination code changes--------------
  const filteredHouses = houses.filter((house) =>
    searchItem.toLocaleLowerCase().trim() === ""
      ? house
      : house.title.toLocaleLowerCase().includes(searchItem)
  );

  const paginatedHouses = filteredHouses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //----------------------------------------------

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
        <h2 className="title">Private House</h2>

        <div className="houses-wrapper">
          {/* ----------------- pagination code changes -------------------------------*/}
          {paginatedHouses &&
            paginatedHouses
              /* {houses &&
            houses
              .filter((house) => {
                return searchItem.toLocaleLowerCase().trim() === ""
                  ? house
                  : house.title.toLocaleLowerCase().includes(searchItem);
              }) */
              // -----------------------------------------------------------------------------

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
                    <h2>{house.title}</h2>
                    <p>{house.desc}</p>
                  </article>
                );
              })}
        </div>
        {/*----------------- pagination code changes----------------------*/}
        <Pagination
          data={filteredHouses}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        {/*---------------------------------------------------------------*/}
      </section>
    </article>
  );
};

export default HouseCart;
