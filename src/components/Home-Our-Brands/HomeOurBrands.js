import React from "react";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeOurBrands.css";

const HomeOurBrands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    centerMode: true,
    // slidesPerRow: 3,
    // pauseOnHover: true,

    responsive: [
      { breakpoint: 350, settings: { slidesToShow: 1 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
      { breakpoint: 800, settings: { slidesToShow: 2 } },
      { breakpoint: 1800, settings: { slidesToShow: 3 } },
    ],
  };
  return (
    <>
      <section className="section-home-our-brands">
        <div className="container-home-our-brand">
          <h2 className="home-our-brands-heading">OUR BRANDS</h2>
          <p className="home-our-brands-subheading">Meet our brands!</p>
          <div className="blog_contain">
            <Slider {...settings}>
              <div className="">
                <img
                  src={images.homeourbrand}
                  alt="our brand logo"
                  // className="home-our-brand-logo"
                />
              </div>
              <div className="">
                <img
                  src={images.homeourbrand2}
                  alt="our brand logo"
                  // className="home-our-brand-logo"
                />
              </div>
              <div className="">
                <img
                  src={images.homeourbrand3}
                  alt="our brand logo"
                  // className="home-our-brand-logo"
                />
              </div>
              <div className="">
                <img
                  src={images.homeourbrand}
                  alt="our brand logo"
                  // className="home-our-brand-logo"
                />
              </div>
              <div className="">
                <img
                  src={images.homeourbrand2}
                  alt="our brand logo"
                  // className="home-our-brand-logo"
                />
              </div>
              <div className="">
                <img
                  src={images.logo05}
                  alt="our brand logo"
                  // className="home-our-brand-logo"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeOurBrands;
