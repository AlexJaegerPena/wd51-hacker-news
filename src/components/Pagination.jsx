import { useState, useEffect } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { houses } from "../data/data";
import "./Pagination.css";

const Pagination = () => {
  // Local state variables
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  // Additional variables
  // Slide length, interval time
  const slideLength = houses.length;
  let slideInterval;
  const intervalTime = 5000;

  // Function to Move to next slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  // Function to Move to previous slide
  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  // Set current slide to zero
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoSlide) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide, intervalTime, autoSlide]);

  return (
    <section>
      <h2 className="pagination-title"> Pagination </h2>
      <div className="houses-pagination-wrapper">
        <FiArrowLeftCircle className="arrow prev" onClick={previousSlide} />
        <FiArrowRightCircle className="arrow next" onClick={nextSlide} />

        {houses.map((house) => {
          const { id, photo, title, desc } = house;
          return (
            <div
              key={id}
              className={
                id === currentSlide ? "slide-show current-slide" : "slide-show"
              }
            >
              {id === currentSlide && (
                <>
                  <figure className="house-image-wrapper">
                    <img className="photo" src={photo} alt={title} />
                  </figure>

                  <aside className="house-info">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                    <h2 className="house-title">{title}</h2>
                    <p className="description"> {desc} </p>
                  </aside>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pagination;
