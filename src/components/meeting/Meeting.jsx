import React from "react";
import images from "../../constants/images";
import "./Meeting.css";

const Meeting = () => {
  return (
    <>
      <section className="section-home-about" style={{ background: "#e8f6f3" }}>
        <div className="container-home-about">
          <div className="home-about-parts2">
            <div className="home-about-part">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlf"
                alt="about us image"
                className="home-aboutus-img"
              />
            </div>
            <div className="home-about-part-second">
              <p className="home-aboutus-heading" style={{ color: "#0c4e62" }}>
                Meetings & Events
              </p>
              <p className="aboutus-text">Plan your Event with us</p>
              <p className="home-aboutus-desc" style={{ color: "#0c4e62" }}>
                Plan your next Event at King's Kraft Hotels and Resorts, the
                perfect venue for you. King's Kraft Hotels and Resorts offers
                leading banquet and event services in all our hotels and resorts
                nationwide.
              </p>
              <p className="home-aboutus-desc" style={{ color: "#0c4e62" }}>
                Outbound Experiential Training & Developmental Programmes
                represent a robust process to enhance employee, team and
                organizational interaction, communication and collaboration; and
                to resolve stress, conflict and crisis. Meeting rooms & spaces
                in all our properties are fully equipped with state-of-the-art
                communication systems and presentation facilities to ensure the
                smooth running of your business event. Whether planning a
                workshop, product launch, a management seminar, or a marketing
                or training session, we can customize our facilities to meet
                your individual needs and ensure a flawless event. Every step
                includes experienced assistance to help you successfully plan
                and execute your Event. The locations of our properties provide
                an ideal place to conduct such programs.
              </p>
              {/* <button className="home-about-us-btn">read more</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Meeting;
