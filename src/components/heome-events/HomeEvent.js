import React, { useEffect, useState } from "react";
import "./HomeEvent.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import images from "../../constants/images";
import data from "../../constants/data";
import { Link } from "react-router-dom";
const HomeEvent = () => {
  const [eventimages, setImages] = useState(data.imageEvent);
  // console.log("data is", data.imageEvent);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = eventimages.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, eventimages]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <>
      <section className="section-home-event">
        <div className="container-home-event">
          <h2 className="section-event-heading">Events</h2>
          <div className="event-parts">
            <div className="event-part">
              {/* <div className="img-box"></div> */}
              {/* <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div> */}
              {eventimages.map((image, personIndex) => {
                const { id, imageUrl } = image;
                let position = "nextSlide";
                if (personIndex === index) {
                  position = "activeSlide";
                }
                if (
                  personIndex === index - 1 ||
                  (index === 0 && personIndex === images.length - 1)
                ) {
                  position = "lastSlide";
                }
                return (
                  <article className={position} key={id}>
                    <img
                      src={imageUrl}
                      alt="hotel images"
                      className="person-img"
                    />
                  </article>
                );
              })}
              <button
                className="prev"
                onClick={() => {
                  setIndex(index - 1);
                }}
              >
                <FiChevronLeft></FiChevronLeft>
              </button>
              <button
                className="next"
                onClick={() => {
                  setIndex(index + 1);
                  // console.log("next", index);
                }}
              >
                <FiChevronRight></FiChevronRight>
              </button>
            </div>
            <div className="event-part2">
              <div className="event-part2-sub">
                {/* <div className="img-box"> */}
                <img
                  src={images.homeeventwedding}
                  alt="event image"
                  className="home-event-img"
                />
                {/* </div> */}
                <div className="event-img-txt">
                  <a className="event-img-txt-heading" href="#">
                    Weddings
                  </a>
                  <p className="event-img-txt-sub">
                    Your Dream Wedding at Dream Destination.
                  </p>
                  <Link className="event-img-txt-link" to={"/wedding"}>
                    Read more
                  </Link>
                </div>
              </div>
              <div className="event-part2-sub">
                {/* <div className="img-box"> */}
                <img
                  src={images.homeeventconferenceimg}
                  alt="event image"
                  className="home-event-img"
                />
                {/* </div> */}
                <div className="event-img-txt">
                  <a className="event-img-txt-heading" href="#">
                    meetingd and events
                  </a>
                  <p className="event-img-txt-sub">
                    WE OFFER GRAND CONFERENCE HALLS AND BOARD ROOMS..
                  </p>
                  <Link className="event-img-txt-link" to="/wedding">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeEvent;
