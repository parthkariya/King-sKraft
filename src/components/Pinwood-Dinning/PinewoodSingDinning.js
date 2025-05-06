import React, { useEffect, useState } from "react";
import "./PinwoodSingDinning.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import images from "../../constants/images";
import data from "../../constants/data";
const PinwoodSingDinning = () => {
  const [imageDinning, setImages] = useState(data.imageDinning);
  console.log("data is", data.imageDinning);

  return (
    <>
      <section className="sec-pinewood-dinning">
        <div className="con-pinewood-dinning">
          <h2 className="pinewood-dinning-heading">DINING</h2>
          <p className="pinewood-dinning-subheading">
            Thoughtfully curated dining experiences a <br /> treasure trove of
            fine delicacies
          </p>
          <div className="parts-pinewood-dinning">
            {/* <div className="dinning-part">
              {imageDinning.map((image, personIndex) => {
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
                    <img
                      src={imageUrl}
                      alt="hotel images"
                      className="person-img"
                    />
                  </article>
                );
              })}
              <button
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
              </button>
            </div> */}
            <div className="part-pinewood-dinning">
              <p className="pinewood-dinning-desc">
                Kings’ Kraft Pinewood Resort, Sasan Gir is 3 Star Resort spread
                our 5 acre surrounded by lush green mango orchards and dense
                forest the home of famous Asiatic Lions. Offering you lavish
                Club Villas with a king size bed and necessary amenities for you
                to indulge into comfortness of your home. Designed in a ethnic
                style inspired by the forest living we offer you a serene and
                memorable stay away from the city life. A Party lawn of 200 pax
                is and ideal for your close family event or a business meet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PinwoodSingDinning;
