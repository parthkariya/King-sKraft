import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { IoLocationSharp } from "react-icons/io5";
import "./Hotel1.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Facility } from "../../components";
import { ACCEPT_HEADER, getslugproperty as url } from "../../Utils/Constant";

import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "../../common";
import { Helmet } from "react-helmet";
import { useLocationContext } from "../../context/location_context";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

import axios from "axios";
import { MdReviews } from "react-icons/md";
import Reviews from "../../components/Reviews";

const Hotel1 = () => {
  const [data, setdata] = useState();
  const [getGalleryData, setGalleryData] = useState([]);
  const [getNumberPass, setNumberPass] = useState();
  const [getNumberPass2, setNumberPass2] = useState();
  const [getEmailPass, setEmailPass] = useState();

  const [AllImages, setAllImages] = useState(1);
  const [getImg, setImg] = useState();
  const [AmenitiesImages, setAmenitiesImages] = useState([]);
  const [RestroImages, setRestroImages] = useState([]);
  const [OutdoorImages, setOutdoorImages] = useState([]);
  const [RoomsImages, setRoomsImages] = useState([]);
  const [getUniqueCategoryData, setUniqueCategoryData] = useState([]);

  const [isHovered, setIsHovered] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [getIndex, setIndex] = useState();

  const handleHover = () => {
    setIsHovered(true);
    setShowMenu(true);
  };
  const handleHover2 = () => {
    setShowMenu2(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
    setShowMenu(false);
  };
  const handleUnhover2 = () => {
    setShowMenu2(false);
  };

  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const placeId = "ChIJy6jLb_jJWTkRP48SCnUldHc"; // Replace with your actual Place ID
  //     const apiKey = "AIzaSyCGRnLCaidXITvRCm6OZxgJtOyzXEBaZQ0";   // Replace with your Google API Key
  //     const corsProxy = "https://cors-anywhere.herokuapp.com/"; // Public CORS proxy

  //     const url = `${corsProxy}https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  //     try {
  //       const response = await fetch(url, {
  //         method: "GET",
  //       });
  //       const data = await response.json();
  //       console.log("Full API Response: ", data);
  //       setReviews(data.result?.reviews || []); // Ensure reviews are present
  //     } catch (err) {
  //       console.error("Error fetching Google Reviews:", err);
  //     }
  //   };

  //   fetchReviews();
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("getUniqueCategoryData", getUniqueCategoryData);

  function ImageGallery() {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    //looping through our images array to create img elements
    const imageCards = getGalleryData.map((image) => (
      <>
        {AllImages === 1 ? (
          <>
            <img
              className="image-card"
              onClick={() => showImage(image)}
              src={image.image_full}
              alt=""
            />
          </>
        ) : (
          <>
            {getImg === image.gal_category ? (
              <>
                <img
                  className="image-card"
                  onClick={() => showImage(image)}
                  src={image.image_full}
                  alt=""
                />
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </>
    ));

    const showImage = (image) => {
      setImageToShow(image);
      setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
      setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e) => {
      e.stopPropagation();
      let currentIndex = getGalleryData.indexOf(imageToShow);
      if (currentIndex >= getGalleryData.length - 1) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = getGalleryData[currentIndex + 1];
        console.log("next", nextImage);

        setImageToShow(nextImage);
      }
    };

    //show previous image in lightbox
    const showPrev = (e) => {
      e.stopPropagation();
      let currentIndex = getGalleryData.indexOf(imageToShow);
      if (currentIndex <= 0) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = getGalleryData[currentIndex - 1];
        console.log("prew", nextImage);
        setImageToShow(nextImage);
      }
    };

    return (
      <>
        <div className="lightbox_main_wrapp">{imageCards}</div>

        {lightboxDisplay ? (
          <div id="lightbox" onClick={hideLightBox}>
            <button className="lightbox_btn_wrapp" onClick={showPrev}>
              <BsFillCaretLeftFill
                className="lightbox_btn"
                style={{ color: "#0c4e62" }}
              />
            </button>
            <img id="lightbox-img" src={imageToShow.image_full}></img>
            <button className="lightbox_btn_wrapp" onClick={showNext}>
              <BsFillCaretRightFill
                className="lightbox_btn"
                style={{ color: "#0c4e62" }}
              />
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
  const paramm = useParams();

  var slug = paramm.id;

  console.log("slug", slug);


  useEffect(() => {
    const uniqueGalCategories = Array.from(
      new Set(getGalleryData.map((item) => item.gal_category))
    );
    setUniqueCategoryData(uniqueGalCategories);
  }, [getGalleryData]);

  const { single_product1, fetchSingleProduct } = useLocationContext();

  useEffect(() => {
    axios
      .get(`${url}${slug}`, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        // console.log("ggg", JSON.stringify(res.data, null, 2));
        console.log("ggg", res.data);
        if (res.data.success == 1) {
          setdata(res.data.data);
          setNumberPass(res?.data?.data?.number1);
          setNumberPass2(res?.data?.data?.number2);
          setEmailPass(res?.data?.data?.email);
          setGalleryData(res.data.data.propertygallery);

          console.log("testtt", res.data.data.propertygallery);
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
                "https://www.kingskraft.com/hotelpage{search_term_string}",
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

        <meta
          name="description"
          content="Our Hotels | King's Kraft Hotels & Resorts"
        />
      </Helmet>
      <Navbar getNumberPass={getNumberPass} getNumberPass2 = {getNumberPass2} getEmailPass={getEmailPass} slug={slug} />
      <section className="hotel1-wrapp">
        <>
          <div className="hotel1-sec1-wrapp">
            <div className="hotel1-sec1-base">
              <div className="sec1-des-main-wrapp">
                <div className="sec1-des-wrapp">
                  <div className="sec-hotel-name-wrapp">
                    <h1>{data?.title}</h1>
                  </div>
                </div>
                <div
                  className="hotel1-text"
                  dangerouslySetInnerHTML={{
                    __html: data?.description,
                  }}
                ></div>
              </div>
              {/* <div className="sec1-des-img-wrapp">
                {data?.image_full ? (
                  <>
                    <img
                      src={data?.image_full}
                      alt=""
                      className="sec1-des-img"
                    />
                  </>
                ) : (
                  <>
                    <img src="" alt="" className="sec1-des-img" />
                  </>
                )}
              </div> */}
            </div>
          </div>

          <div className="img-filter-main">
            <div
              className="img-filter-btn img-filter-btn-active"
              style={{
                backgroundColor:
                  AllImages === 1 ? "var(--color-brand)" : "#fff",
                color:
                  AllImages === 1
                    ? "var(--color-golden)"
                    : "var(--color-brand)",
              }}
              onClick={() => {
                setAllImages(1);
                setIndex();
              }}
            >
              All
            </div>
            {getUniqueCategoryData?.map((item, index) => {
              return (
                <>
                  {item === 3 ? (
                    <></>
                  ) : (
                    <>
                      <div
                        className="img-filter-btn"
                        style={{
                          backgroundColor:
                            getIndex === index ? "var(--color-brand)" : "#fff",
                          color:
                            getIndex === index
                              ? "var(--color-golden)"
                              : "var(--color-brand)",
                        }}
                        onClick={() => {
                          setIndex(index);
                          setAllImages(0);
                          setImg(item);
                        }}
                      >
                        {item === 9
                          ? "Amenities"
                          : item === 7
                            ? "Outdoor"
                            : item === 8
                              ? "Rooms"
                              : item === 5
                                ? "Restaurant"
                                : item === 10
                                  ? "Reception"
                                  : item === 11
                                    ? "Club Room"
                                    : item === 12
                                      ? "Studio Room"
                                      : item === 13
                                        ? "Premium Suit"
                                        : item === 14
                                          ? "Club Cottage"
                                          : item === 15
                                            ? "Riverview Cottage"
                                            : item === 16
                                              ? "Pool"
                                              : item === 17
                                                ? "Out Side View"
                                                : item === 3
                                                  ? null
                                                  : null}
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
          <ImageGallery />
          
          <div className="hotel1-sec2-wrapp">
            <div className="hotel1-sec2-base">
              <ul className="hotel1-sec2-list-wrapp">
                <p
                  className="hotel1-sec2-single-list"
                  dangerouslySetInnerHTML={{
                    __html: data?.general_description,
                  }}
                ></p>
              </ul>
              <div className="sec2-foot-wrapp">
                <div className="sec2-foot-no-wrapp">
                  <div className="sec2-foot-single">
                    <a href={data?.map} target="_blank" style={{ flex: 0 }}>
                      <IoLocationSharp className="sec2-foot-icon" />
                    </a>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data?.contactus_description,
                      }}
                    ></p>
                  </div>
                  <div className="sec2-foot-single">
                    <div style={{ width: "auto" }}>
                      <IoLocationSharp className="sec2-foot-icon" />
                    </div>
                    <div className="map-container">
                      <a href={data?.map} target="_blank" className="map-link">
                        {data?.map}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="sec2-foot-no-wrapp">
                  {/* <div className="sec2-foot-single">
                    <FaPhoneAlt className="sec2-foot-icon" />
                    <a
                      href={
                        data?.number1
                          ? `tel:+91${data?.number1}`
                          : data?.number2
                            ? `tel:+91${data?.number2}`
                            : ""
                      }
                    >
                      {data?.number1
                        ? `+91 ${data?.number1.slice(
                          0,
                          5
                        )} ${data?.number1.slice(5)}`
                        : ""}
                      <br />
                      {data?.number2
                        ? `+91 ${data?.number2.slice(
                          0,
                          5
                        )} ${data?.number2.slice(5)}`
                        : ""}
                    </a>
                  </div> */}

                  <div className="sec2-foot-single">
                    <FaPhoneAlt className="sec2-foot-icon" />
                      <div>
                    {/* First Number */}
                    {data?.number1 && (
                      <>
                        <a href={`tel:+91${data?.number1}`} className="hotel_single_page_number">
                          +91 {data?.number1.slice(0, 5)} {data?.number1.slice(5)}
                        </a>
                        <br />
                      </>
                    )}

                    {/* Second Number */}
                    {data?.number2 && (
                      <>
                        <a href={`tel:+91${data?.number2}`} className="hotel_single_page_number">
                          +91 {data?.number2.slice(0, 5)} {data?.number2.slice(5)}
                        </a>
                      </>
                    )}
                    </div>
                  </div>



                  <div className="sec2-foot-single">
                    <IoMdMail className="sec2-foot-icon" />
                    <a href="mailto:{data?.email}">{data?.email}</a>
                  </div>
                </div>

                <div className="sec2-foot-no-wrapp">
                  <div className="sec2-foot-single">
                    <FaFacebookSquare className="sec2-foot-icon" />
                    <a href={data?.facebook} target="_blank">
                      {data?.fb_name}
                    </a>
                  </div>

                  <div className="sec2-foot-single">
                    <FaInstagramSquare className="sec2-foot-icon" />
                    <a href={data?.instagram} target="_blank">
                      {data?.insta_name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Reviews/> */}



          {/* <div className="img-filter-main">
            <div
              className="img-filter-btn img-filter-btn-active"
              style={{
                backgroundColor:
                  AllImages === 1 ? "var(--color-brand)" : "#fff",
                color:
                  AllImages === 1
                    ? "var(--color-golden)"
                    : "var(--color-brand)",
              }}
              onClick={() => {
                setAllImages(1);
                setIndex();
              }}
            >
              All
            </div>
            {getUniqueCategoryData?.map((item, index) => {
              return (
                <>
                  {item === 3 ? (
                    <></>
                  ) : (
                    <>
                      <div
                        className="img-filter-btn"
                        style={{
                          backgroundColor:
                            getIndex === index ? "var(--color-brand)" : "#fff",
                          color:
                            getIndex === index
                              ? "var(--color-golden)"
                              : "var(--color-brand)",
                        }}
                        onClick={() => {
                          setIndex(index);
                          setAllImages(0);
                          setImg(item);
                        }}
                      >
                        {item === 9
                          ? "Amenities"
                          : item === 7
                            ? "Outdoor"
                            : item === 8
                              ? "Rooms"
                              : item === 5
                                ? "Restaurant"
                                : item === 10
                                  ? "Reception"
                                  : item === 11
                                    ? "Club Room"
                                    : item === 12
                                      ? "Studio Room"
                                      : item === 13
                                        ? "Premium Suit"
                                        : item === 14
                                          ? "Club Cottage"
                                          : item === 15
                                            ? "Riverview Cottage"
                                            : item === 16
                                              ? "Pool"
                                              : item === 17
                                                ? "Out Side View"
                                                : item === 3
                                                  ? null
                                                  : null}
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
          <ImageGallery /> */}
          {data && data.propertyamenities.length > 0 ? (
            <Facility item={data && data} />
          ) : null}
        </>
      </section>

      <div className="reviews_main">
        {slug === "king-s-kraft-stay-inn" ?
          <>
          <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25553528' frameborder='0' width='100%' height='100%'></iframe>
          </> : <>{slug === "king-s-kraft-prabhu-resort-rajkot" ? <>
            <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25553548' frameborder='0' width='100%' height='100%'></iframe>
          </> : <>{slug === "king-s-kraft-big-bang-rajkot" ? <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25553528' frameborder='0' width='100%' height='100%'></iframe>: <>
            {slug === "king-s-kraft-the-park-executive" ? <><iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25553557' frameborder='0' width='100%' height='100%'></iframe></> : <>
              {slug === "king-s-kraft-tremezzo-inn" ? <>
                <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25553571' frameborder='0' width='100%' height='100%'></iframe>
              </> : <>
                {slug === "king-s-kraft-river-side-resort" ? <><iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25553573' frameborder='0' width='100%' height='100%'></iframe></> : <></>}
              </>}
            </>}
          </>}</>}</>}


      </div>
      <Footer />

      <a
        className="whats-app"
        href={"https://api.whatsapp.com/send?phone=" + `${data?.number1}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="my-float" />
      </a>
    </>
  );
};

export default Hotel1;
