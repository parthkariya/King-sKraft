import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
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
  // HomeBlog,
  Key,
} from "../components";
import images from "../constants/images";
import { useLocationContext } from "../context/location_context";
import { IoMdMail } from "react-icons/io";

const FrontPage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { location_list, is_loading_home } = useLocationContext();

  window.scrollTo(0, 0);

  const HandleScroll = () => {
    window.scrollTo(0, 2000);
  };

  return (
    <>

      <Helmet>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            name: "Kings Kraft",
            url: "https://www.kingskraft.com/",
            logo: "	https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            description: "Your organization description.",
            telephone: "098799 64314",
            email: "kingskraft.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Raiko Hotels & Resort LLP",
              addressLocality: "101 Deep Complex Kotechanagar Main Road,",
              addressRegion: "Off. Aminmarg",
              postalCode: "360004",
              addressCountry: "INDIA",
            },

            SameAs: [


              "https://www.facebook.com/KingsKraftIndia?mibextid=ZbWKwL",

              "https://www.instagram.com/kingskraft.hotel/?igshid=YmMyMTA2M2Y%3D",
            ],
          })}
        </script>

        <script type="application/ld+json">
          {
            JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "King's Kraft",
              "url": "https://www.kingskraft.com/",
              "logo": "	https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.kingskraft.com/hotelpage{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })}
        </script>


        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Management",
            name: "Kings Kraft",
            url: "https://www.kingskraft.com/",
            logo: "https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            description: "Your organization description.",
            telephone: "098799 64314",
            email: "kingskraft.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Raiko Hotels & Resort LLP",
              addressLocality: "101 Deep Complex Kotechanagar Main Road,",
              addressRegion: "Off. Aminmarg",
              postalCode: "360004",
              addressCountry: "INDIA",
            },

            SameAs: [


              "https://www.facebook.com/KingsKraftIndia?mibextid=ZbWKwL",

              "https://www.instagram.com/kingskraft.hotel/?igshid=YmMyMTA2M2Y%3D",
            ],
          })}
        </script>

        <title> King's Kraft Hotels & Resorts</title>
        <meta
          name="description"
          content="King's Kraft Hotels & Resorts"

        />
        <link rel="canonical" href="http://www.kingskraft.com/hotelpage" />
      </Helmet>

      {/* ------------ navbar ----------- */}

      <>
        <div className="nav-down">
       
       
          <div className="top_nav_text_wrapp padding-nav bg-nav">
            <div className="main-nav-logo">
              <Link to="/">
                <img src={images.kinglogoup} className="nav-logo" alt="logo" />
              </Link>
            </div>
            {/* <div> */}
            <div className="foot-num-wrapp nav_qick_cont_part">
            <div className="navbar_inner_flex">
                
                <div className="foot-num">
                <FaPhoneAlt className="footer-con-icon" style={{width:"1.1rem",height:"1.1rem"}} />
                  <a style={{fontSize:"16px"}} href="tel:9879964314">98799 64314</a>
                  <div className="svr"></div>
                  <a style={{fontSize:"16px"}} href="tel:9825290955">98252 90955</a>
                  </div>
               
                  <div>
                  <div className="foot-mail-single">
                  <IoMdMail className="footer-con-icon" style={{width:"1.1rem",height:"1.1rem"}}/>
                  <a style={{fontSize:"16px"}} href="mailto:kingskraft.com" className="footer-social-linkk">info@kingskraft.com</a>
                </div>
                </div>
                </div>
                </div>
              {/* </div> */}
              
            <ul className="main-nav-list">
              <li>
                <button onClick={HandleScroll} className="main-nav-link">
                  OUR HOTELS
                </button>
              </li>
              <li>
                <Link className="main-nav-link" to="/wedding">
                  WEDDINGS & EVENTS
                </Link>
              </li>
              <li>
                <Link className="main-nav-link" to="/">
                  SPECIAL OFFERS
                </Link>
              </li>
              <li>
                <Link className="main-nav-link nav-cta" to="/">
                  MEDIA
                </Link>
              </li>

              <li>
                <Link className="main-nav-link nav-cta" to="partnerwithus">
                  PARTNER WITH US
                </Link>
              </li>
              <li>
                <Link className="main-nav-link nav-cta" to="/contactus">
                  CONTACT
                </Link>
              </li>
              
            </ul>
            {/* </div> */}

         
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
          </div>
        </div>
        {toggleMenu && (
          <div className="sidebar_main_wrapp">
            <div className="sidebar_base_wrapp">
                <div className="foot-num-wrapp nav_qick_cont_part nav_qick_cont_part_resp">
            <div className="navbar_inner_flex navbar_inner_flex_resp">
                
                <div className="foot-num">
                <FaPhoneAlt className="footer-con-icon" style={{width:"1.1rem",height:"1.1rem"}} />
                  <a style={{fontSize:"16px"}} href="tel:9879964314">98799 64314</a>
                  </div>
               
                  <div>
                  <div className="foot-mail-single">
                  <IoMdMail className="footer-con-icon" style={{width:"1.1rem",height:"1.1rem"}}/>
                  <a style={{fontSize:"16px"}} href="mailto:kingskraft.com" className="footer-social-linkk">info@kingskraft.com</a>
                </div>
                </div>
                </div>
                </div>
              <button
                className="sidebar_link"
                onClick={() => {
                  setToggleMenu(false);
                  HandleScroll();
                }}
              >
                OUR HOTELS
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

      {/* ------------ Hero ------------  */}

      <Hero />

      {/* ------------ Home About-------- */}

      {/* <HomeAbout /> */}

      {/* Home Key */}

      <Key />

      {/* ---------- Our Location ------- */}

      <HomeOurLocation />

      {/* ---------- Brands ------------- */}

      {/* <HomeOurBrands /> */}

      {/* ------------ Events ----------- */}

      <HomeEvent />

      {/* Home Gallery */}

      <HomeGalleryUpdated />

      {/* ------------ Blogs  ----------- */}

      {/* <HomeBlog /> */}

      {/* ----------- Footer  ----------- */}

      <Footer />

      <a
        className="whats-app"
        href="https://api.whatsapp.com/send?phone=919825290955"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="my-float" />
      </a>
    </>
  );
};

export default FrontPage;
