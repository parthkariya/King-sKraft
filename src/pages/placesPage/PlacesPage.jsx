import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import { Footer, Navbar } from "../../common";
import { Hero } from "../../components";
import { useLocationContext } from "../../context/location_context";
import { ACCEPT_HEADER, get_hotels } from "../../Utils/Constant";
import "./PlacesPage.css";

const PlacesPage = (props) => {
  // const { location_list, is_loading_home } = useLocationContext();
  const [first, setfirst] = useState([]);

  const location = useLocation();

  useEffect(() => {
    // console.log("location_list -->", location.state);
    // setfirst(props.ref);
    window.scrollTo(0, 0);
  }, []);

  const paramm = useParams();

  var slug = paramm.id;

  useEffect(() => {
    const formdata = new FormData();

    formdata.append("slug", slug);

    axios
      .post(get_hotels, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        // console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setfirst(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  }, [slug]);

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
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "King's Kraft",
            url: "https://www.kingskraft.com/",
            logo: "https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.kingskraft.com/Placespage{search_term_string}",
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
        <title>Our Places | King's Kraft Hotels & Resorts</title>
        <meta
          name="description"
          content="Our Places | King's Kraft Hotels & Resorts"
        />
      </Helmet>
      <Navbar slug={slug} />
      <Hero />
      <section className="section-our-location">
        <div className="container-our-location">
          <h1 className="our-location-heading">our Places</h1>
          <p className="our-location-text">
            A collection of luxury hotels & resorts
          </p>
          <div className="part-our-location">
            {/* {first &&
              first.map((item, index) => {
                console.log("item", item);
                {item.id === 4 ?  return (
                  <></> : 
                  <>
                  <Link
                    className="first-part-our-location"
                    key={index}
                    to={`/hotel/${item.slug}`}
                    // state={{
                    //   item: item,
                    //   place: location.state.place,
                    //   id: item.id,
                    // }}
                  >
                    <div className="home-our-location-img-box">
                      <img
                        src={item.image_full}
                        alt="our-locations"
                        className="home-our-location-img"
                      />
                    </div>
                    <div className="home-our-location-text-box">
                      <a href="" className="our-location-img-link">
                        {item.title}
                      </a>
                    </div>
                  </Link>
                  </>
                );}
               
              })} */}
            {first &&
              first.map((item, index) => {
                if (item.id !== 4) {
                  return (
                    <Link
                      className="first-part-our-location"
                      key={index}
                      to={`/hotel/${item.slug}`}
                    >
                      <div className="home-our-location-img-box">
                        <img
                          src={item.image_full}
                          alt="our-locations"
                          className="home-our-location-img"
                        />
                      </div>
                      <div className="home-our-location-text-box">
                        <a href="" className="our-location-img-link">
                          {item.title}
                        </a>
                      </div>
                    </Link>
                  );
                }
                return null;
              })}
          </div>
        </div>
      </section>
      <Footer />

      {/* <a
        className="whats-app"
        href={
          "https://api.whatsapp.com/send?phone=" + `${location.state.number}`
        }
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="my-float" />
      </a> */}
    </>
  );
};

export default PlacesPage;
