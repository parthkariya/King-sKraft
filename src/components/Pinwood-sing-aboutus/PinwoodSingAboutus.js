import React from "react";
import "./PinwoodSingAboutus.css";
import images from "../../constants/images";
const PinwoodSingAboutus = () => {
  return (
    <>
      <section className="sec-pinewood-about">
        <div className="con-pinewood-about">
          <h2 className="pinewood-about-heading">About us</h2>
          <p className="pinewood-about-subheading">
            Welcome to Pinewood Resorts Sasan Gir
          </p>
          <div className="parts-pinewood-about">
            <div className="part-pinewood-about">
              <img
                src={images.pinewoodabout}
                alt="pinewood image"
                className="pinewood-about-img"
              />
            </div>
            <div className="part-pinewood-about">
              <p className="pinewood-about-desc">
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

export default PinwoodSingAboutus;
