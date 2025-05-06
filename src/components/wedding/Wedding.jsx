import React from "react";
import images from "../../constants/images";
import "./Wedding.css";

const Wedding = () => {
  return (
    <>
      <section className="section-home-about">
        <div className="container-home-about">
          <div className="home-about-parts">
            <div className="home-about-part">
              <img
                src={images.wed1}
                alt="about us image"
                className="home-aboutus-img"
              />
            </div>
            <div className="home-about-part-second">
              <h1 className="home-aboutus-heading">WEDDING</h1>
              <p className="aboutus-text">
                Weddings crafted by King's Kraft Hotels & Resorts
              </p>
              <p className="home-aboutus-desc">
                Plan your next Event at King's Kraft Hotels and Resorts, the perfect venue for you. King's Kraft Hotels and Resorts offers leading banquet and event services in all our hotels and resorts nationwide.
              </p>
              <p className="home-aboutus-desc">
                Outbound Experiential Training & Developmental Programmes represent a robust process to enhance employee, team and organizational interaction, communication and collaboration; and to resolve stress, conflict and crisis. Meeting rooms & spaces in all our properties are fully equipped with state-of-the-art communication systems and presentation facilities to ensure the smooth running of your business event. Whether planning a workshop, product launch, a management seminar, or a marketing or training session, we can customize our facilities to meet your individual needs and ensure a flawless event. Every step includes experienced assistance to help you successfully plan and execute your Event. The locations of our properties provide an ideal place to conduct such programs.
              </p>
              {/* <button className="home-about-us-btn">read more</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wedding;
