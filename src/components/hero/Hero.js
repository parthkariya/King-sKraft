import React, { useState, useEffect } from "react";
import "./Hero.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "../../constants/data";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import { useLocationContext } from "../../context/location_context";

// import { Hero } from "..";
function Hero() {
  const { places_list, is_place_home, getPlace } = useLocationContext();

  useEffect(() => {
    getPlace();
    // console.log("places_list -->", places_list);
  }, []);

  const [images, setImages] = useState(data.imageHero);
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());
  const [get_place, setPlace] = useState(1);

  // console.log("data is", data.imageHero);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div>
      {/* <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div> */}
      <div className="section-center">
        {images.map((image, personIndex) => {
          const { id, imageUrl } = image;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === images.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={imageUrl} alt="hotel images" className="person-img" />
            </article>
          );
        })}
        {/* <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
            console.log("next", index);
          }}
        >
          <FiChevronRight></FiChevronRight>
        </button> */}

        {/* Availability */}
        <div className="gift-main-container">
          <div className="gift-container">
            {/* <p className="gift-part">Gift Finder</p> */}
            <div className="gift-part-flex">
              <div className="lbl-selector">
                {/* <label className="s-lbl">Budget</label> */}
                <select className="gift-selector" name="budget">
                  <option className="margin-right" value="country">
                    India
                  </option>
                  {/* <option value="country">Malaysia</option>
                  <option value="country">Canada</option> */}
                </select>
              </div>
              <div className="lbl-selector">
                {/* <label className="s-lbl">Category</label> */}
                <select
                  className="gift-selector"
                  name="budget"
                  onChange={(e) => {
                    setPlace(e.target.value);
                  }}
                  value={get_place}
                >
                  {places_list &&
                    places_list.map((item, index) => {
                      return (
                        // <option value={`${item.id} ${item.title} `} key={index}>
                        <option value={item.id} key={index}>
                          {item.title}
                        </option>
                      );
                    })}
                  {/* <option value="health">Pandora Grand Jaipur</option>
                  <option value="bags">Pandora Grand Gurugram</option> */}
                </select>
              </div>
              <div className="lbl-selector">
                {/* <label className="s-lbl">Availability</label> */}
                {/* <input
                  type="date"
                  value="2017-06-01"
                  className="gift-selector"
                  onChange={(value) => {
                    console.log(value);
                  }}
                  placeholder="Arrival Date"
                /> */}
                <DatePicker
                  onChange={onChange}
                  value={value}
                  className="gift-selector2"
                />
              </div>
              <div className="lbl-selector">
                {/* <label className="s-lbl">Availability</label> */}
                <DatePicker
                  onChange={onChange2}
                  value={value2}
                  className="gift-selector2"
                />
              </div>
            </div>

            <Link
              to="/form"
              state={{
                value2: value2,
                value: value,
                get_place: get_place,
              }}
              className="gift-btn"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
