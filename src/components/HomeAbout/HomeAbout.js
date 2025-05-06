import React from "react";
import "./HomeAbout.css";
import images from "../../constants/images";
const HomeAbout = () => {
  return (
    <>
      <section className="section-home-about">
        <div className="container-home-about">
          <div className="home-about-parts">
            <div className="home-about-part">
              <img
                src={images.sasanimg12}
                alt="about us image"
                className="home-aboutus-img"
              />
            </div>
            <div className="home-about-part-second">
              <h1 className="home-aboutus-heading">about us</h1>
              <p className="aboutus-text">EXTRAORDINARY LUXURY</p>
              <p className="home-aboutus-desc">
                We derive our name from the Greek story of King's Kraft, who
                Zeus gave a boon to be all fulfilled and gifted. With King's
                Kraft hospitality we aim to bring the literal meaning of the
                word to our guests. We try to make their experiences as
                fulfilled as possible to make them feel that every moment they
                spend with us are gifted. And all our gifts (our resources and
                people) are also at services to prioritize the needs of our
                partner.
              </p>
              <p className="home-aboutus-desc">
                King's Kraft takes pride in being gifted with extraordinary
                people that are skilled in both infrastructure (design) and
                gourmet cooking. The luxurious designs that radiate in every
                destination while keeping the environmental integrity intact is
                the trademark of King's Kraft Hospitality. We make sure that our
                guests not only enjoy a stay that is palatial but also feel the
                richness in every bite of food and in every sip of a drink. At
                King's Kraft, we’re all about preserving culture and history
                while creating moments that can become your legacy in the talks
                of guests. And that is why King's Kraft doesn’t just serve
                people, we curate services that make an impression.
              </p>
              <button className="home-about-us-btn">read more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
