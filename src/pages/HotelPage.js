import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../common";
import { Hero, HomeOurLocation } from "../components";
import images from "../constants/images";
import { useLocationContext } from "../context/location_context";
import { IoMdMail } from "react-icons/io";

const HotelPage = () => {
  window.scrollTo(0, 600);

  const [toggleMenu, setToggleMenu] = useState(false);
  const { location_list, is_loading_home } = useLocationContext();

  return (
    <div>
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
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "King's Kraft",
            url: "https://www.kingskraft.com/",
            logo: "https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.kingskraft.com/hotel{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Management",
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
        <title>Our Hotels | King's Kraft Hotels & Resorts</title>
        <meta
          name="description"
          content="Our Hotels | King's Kraft Hotels & Resorts"
        />
      </Helmet>
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
                <img src={images.kinglogoup} className="nav-logo" alt="logo" />
              </Link>
            </div>
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
            <ul className="main-nav-list">
              <li>
                <a href="#loca" className="main-nav-link">
                  OUR HOTELS
                </a>
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
                <Link className="main-nav-link" to="/">
                  SPECIAL OFFERS
                </Link>
              </li>
              <li>
                <Link className="main-nav-link nav-cta" to="/">
                  MEDIA
                </Link>
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
                <Link className="main-nav-link nav-cta" to="/contactus">
                  CONTACT
                </Link>
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
              <a
                className="sidebar_link"
                href="#loca"
                onClick={() => setToggleMenu(false)}>
                OUR HOTELS
              </a>
              <Link
                className="sidebar_link"
                to="/wedding"
                onClick={() => setToggleMenu(false)}>
                WEDDINGS & EVENTS
              </Link>
              <Link
                className="sidebar_link"
                to=""
                onClick={() => setToggleMenu(false)}>
                SPECIAL OFFERS
              </Link>
              <Link
                className="sidebar_link"
                to=""
                onClick={() => setToggleMenu(false)}>
                MEDIA
              </Link>
              <Link
                className="sidebar_link"
                to="/partnerwithus"
                onClick={() => setToggleMenu(false)}>
                PARTNER WITH US
              </Link>
              <Link
                className="sidebar_link"
                to="/contactus"
                onClick={() => setToggleMenu(false)}>
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </>{" "}
      <Hero />
      <section className="section-our-location" id="loca">
        <div className="container-our-location">
          <h1 className="our-location-heading">our locations</h1>
          <p className="our-location-text">
            A collection of luxury hotels & resorts
          </p>
          <div className="part-our-location">
            {location_list &&
              location_list.map((item, index) => {
                console.log("item", item);
                return (
                  <>
                  {/* <>
                    {item.property.length > 1 ? (
                      <Link
                        className="first-part-our-location"
                        key={index}
                        to={`/PlacesPage/${item.name}`}
                        // to="/PlacesPage"
                        // state={{
                        //   item: item.property,
                        //   place: item.name,
                        //   id: item.id,
                        // }}
                      >
                        <div className="home-our-location-img-box">
                          <img
                            src={item.image_full_path}
                            alt="our-locations"
                            className="home-our-location-img"
                          />
                        </div>
                        <div className="home-our-location-text-box">
                          <a href="" className="our-location-img-link">
                            {item.name}
                          </a>
                        </div>
                      </Link>
                    ) : 
                     (
                      <Link
                        className="first-part-our-location"
                        key={index}
                         to={`/hotel/${item.property[0].slug}`}

                        // to="/hotel"
                        // state={{
                        //   item: item.property[0],
                        //   place: item.name,
                        //   id: item.id,
                        //   slug:
                        // }}
                      >
                        <div className="home-our-location-img-box">
                          <img
                            src={item.image_full_path}
                            alt="our-locations"
                            className="home-our-location-img"
                          />
                        </div>
                        <div className="home-our-location-text-box">
                          <a href="" className="our-location-img-link">
                            {item.name}
                          </a>
                        </div>
                      </Link>
                    )}
                  </> */}

                  {item?.property.length > 0 ? <>
                    {item.property.map((itm,ind)=>{
                      return(
                        <>
                        {itm.id === 4 ? <></> : <>
                          <Link
                      className="first-part-our-location"
                      key={index}
                      to={`/hotel/${itm.slug}`}

                      // to="/hotel"
                      // state={{
                      //   item: item.property[0],
                      //   place: item.name,
                      //   id: item.id,
                      //   slug:
                      // }}
                    >
                      <div className="home-our-location-img-box">
                        <img
                          src={itm.image_full}
                          alt="our-locations"
                          className="home-our-location-img"
                        />
                      </div>
                      {/* <div className="home-our-location-text-box">
                        <a href="#" className="our-location-img-link">
                          {itm.name}
                        </a>
                      </div> */}

                      <div className="home-our-location-text-box" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <a href="#" className="our-location-img-link">
                          {itm.name}
                        </a>
                        <a href="#" className="our-location-img-link our-location-img-link-city">
                          {itm.name === "KING’S KRAFT STAY INN" ? "RAJKOT" : itm.name === "KING’S KRAFT PRABHU RESORT" ? "RAJKOT (AIRPORT)" : itm.name === "BIG BANG ADVENTURE PARK" ? "RAJKOT" : itm.name === "KING’S KRAFT THE PARK EXECUTIVE" ? "JAMNAGAR" : itm.name === "KING’S KRAFT TREMEZZO INN" ? "SOMNATH" : itm.name === "KING’S KRAFT RIVER SIDE RESORT" ? "SASAN GIR" : ""}
                        </a>
                        
                      </div>
                    </Link>
                        </>}
                       </>
                      )
                    })}
                  </> : <></>}
                  </>
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
      <a
        className="whats-app"
        href="https://api.whatsapp.com/send?phone=919879964314"
        target="_blank"
        rel="noreferrer">
        <FaWhatsapp className="my-float" />
      </a>
    </div>
  );
};

export default HotelPage;
