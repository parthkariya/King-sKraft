import React, { useState, useEffect } from "react";
// import "./Hero.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "../../constants/data";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";

// import { Hero } from "..";
function Hero2() {
  const [images, setImages] = useState(data.imageHero);
  const [value, onChange] = useState(new Date());

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
    <section>
      {/* <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div> */}
      <div className="section-center">
        <article className="">
          <img
            src={images.heroimg1}
            alt="hotel images"
            className="person-img"
          />
        </article>

        {/* Availability */}
        <div className="gift-main-container">
          <div className="gift-container">
            {/* <p className="gift-part">Gift Finder</p> */}
            <div className="gift-part-flex">
              <div className="lbl-selector">
                {/* <label className="s-lbl">Budget</label> */}
                <select className="gift-selector" name="budget">
                  <option className="margin-right" value="country">
                    india
                  </option>
                  <option value="country">Malaysia</option>
                  <option value="country">Canada</option>
                </select>
              </div>
              <div className="lbl-selector">
                {/* <label className="s-lbl">Category</label> */}
                <select className="gift-selector" name="budget">
                  <option className="margin-right" value="all">
                    Garnett Surat
                  </option>
                  <option className="margin-right" value="music">
                    Agate Pandora Kufri
                  </option>
                  <option value="trave">Pandora Grand Udaipur</option>
                  <option value="health">Pandora Grand Jaipur</option>
                  <option value="bags">Pandora Grand Gurugram</option>
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
                <input
                  type="date"
                  value="value"
                  className="gift-selector"
                  // placeholder="Departure Date"
                />
              </div>
            </div>

            <Link to="/form" className="gift-btn">
              Search
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
