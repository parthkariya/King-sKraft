import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../common";
import {
  Hero,
  HomeOurLocation,
  HomeAbout,
  HomeOurBrands,
  // HomeOurBrandUpdated,
  HomeEvent,
  // HomeGallery,
  HomeGalleryUpdated,
  HomeBlog,
} from "../components";
import images from "../constants/images";
import { useLocationContext } from "../context/location_context";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { location_list, is_loading_home } = useLocationContext();

  window.scrollTo(0, 0);

  const HandleScroll = () => {
    window.scrollTo(0, 1300);
  };

  return (
    <>
      <Helmet>
        <title>King's Kraft Hotels & Resorts</title>
        <meta name="description" content="King's Kraft Hotels & Resorts" />
      </Helmet>
      <div style={{ width: "100%" }}>
        {/* <Navbar /> */}

        <>
          {/* <div className="nav-up">
        <div className="top_nav_text_wrapp justify-content-between">
          <div className="nav-up-location">
            <MdLocationOn className="nav-up-icon" />

            <p className="nav-up-text">
              101 Deep Complex Kotechanagar Main Road, Off. Aminmarg Rajkot
              India
            </p>
          </div>
          <div className="nav-up-location">
            <a href="#">
              <p className="nav-up-text">CARRER</p>
            </a>
            <a href="https://www.facebook.com/login/" target="_blank">
              {" "}
              <GrFacebookOption className="nav-up-icon" />
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank">
              <AiOutlineTwitter className="nav-up-icon" />
            </a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank">
              <RiInstagramFill className="nav-up-icon" />
            </a>
          </div>
        </div>
      </div> */}
          <div className="nav-down">
            <div className="top_nav_text_wrapp padding-nav bg-nav">
              <div className="main-nav-logo">
                <Link to="/">
                  <img src={images.logo} className="nav-logo" alt="logo" />
                </Link>
              </div>
              <ul className="main-nav-list">
                <li>
                  <button onClick={HandleScroll} className="main-nav-link">
                    OUR HOTELS
                  </button>
                </li>
                {/* <li>
              <a className="main-nav-link" href="#">
                EXPERIENCES
              </a>
            </li> */}
                <li>
                  <Link className="main-nav-link" to="/wedding">
                    WEDDINGS & EVENTS
                  </Link>
                </li>
                <li>
                  <a className="main-nav-link" href="">
                    SPECIAL OFFERS
                  </a>
                </li>
                <li>
                  <a className="main-nav-link nav-cta" href="">
                    MEDIA
                  </a>
                </li>
                {/* <li>
              <a className="main-nav-link nav-cta" href="#">
                ABOUT
              </a>
            </li> */}
                <li>
                  <Link className="main-nav-link nav-cta" to="/partnerwithus">
                    PARTNER WITH US
                  </Link>
                </li>
                {/* <li>
              <a className="main-nav-link nav-cta" href="#">
                BLOG
              </a>
            </li> */}
                <li>
                  <a className="main-nav-link nav-cta" href="">
                    CONTACT
                  </a>
                </li>
              </ul>
              {/* <button className="side_icon"> */}
              {toggleMenu === false ? (
                <GiHamburgerMenu
                  className="side_icon"
                  onClick={() => setToggleMenu(true)}
                />
              ) : (
                <RiCloseFill
                  className="side_icon"
                  onClick={() => setToggleMenu(false)}
                />
              )}
              {/* </button> */}
            </div>
          </div>
          {toggleMenu && (
            <div className="sidebar_main_wrapp">
              <div className="sidebar_base_wrapp">
                <button
                  className="sidebar_link"
                  onClick={() => {
                    setToggleMenu(false);
                    HandleScroll();
                  }}
                >
                  OUR HOTELS
                  {/* as check github */}
                </button>
                <Link
                  className="sidebar_link"
                  to="/wedding"
                  onClick={() => setToggleMenu(false)}
                >
                  WEDDINGS & EVENTS
                </Link>
                <Link
                  className="sidebar_link"
                  to=""
                  onClick={() => setToggleMenu(false)}
                >
                  SPECIAL OFFERS
                </Link>
                <Link
                  className="sidebar_link"
                  to=""
                  onClick={() => setToggleMenu(false)}
                >
                  MEDIA
                </Link>
                <Link
                  className="sidebar_link"
                  to="/partnerwithus"
                  onClick={() => setToggleMenu(false)}
                >
                  PARTNER WITH US
                </Link>
                <Link
                  className="sidebar_link"
                  to="/contactus"
                  onClick={() => setToggleMenu(false)}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </>

        <Hero />
        {/* <Key /> */}
        <HomeAbout />
        <HomeOurLocation />

        {/* <Key /> */}

        <HomeOurBrands />
        {/* <HomeOurBrandUpdated /> */}
        <HomeEvent />
        {/* <HomeGallery /> */}
        <HomeGalleryUpdated />
        <HomeBlog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
