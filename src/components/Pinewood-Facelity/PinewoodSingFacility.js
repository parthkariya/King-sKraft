import React from "react";
import "./PinewoodSingFacility.css";
import images from "../../constants/images";
const PinewoodSingFacility = () => {
  return (
    <>
      <section className="sec-pinewood-event">
        <div className="con-pinewood-event">
          <h2 className="pinewood-event-heading">FACILITIES & EVENTS</h2>
          <p className="pinewood-event-subheading">
            “Endless Memories filled with love, laughter & celebrations”
          </p>
          <div className="parts-pinewood-event">
            <div className="part-pinewood-event">
              <p className="pinewood-event-desc">
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
            <div className="part-pinewood-event">
              <img
                src={images.pinewoodsingeventfaci}
                alt="pinewood image"
                className="pinewood-event-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PinewoodSingFacility;
