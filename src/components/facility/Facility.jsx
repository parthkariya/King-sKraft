import React, { useEffect, useState } from "react";
import "./Facility.css";
import imagess from "../../constants/images";
import { Banner } from "../banner/Banner";
import data from "../../constants/data";
import "../banner/Banner.css";
const Facility = (props) => {
  // const [bannImage, setBannImage] = useState(data.imageBanner);
  // console.log("--->", data.imageBanner);
  const images = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  const [getitem, setItem] = useState([]);
  const [getgallery, setGallery] = useState([]);

  useEffect(() => {
    console.log("prop", props.item);
    setItem(props.item.propertyamenities);
    setGallery(props.item.propertygallery);

  }, []);

  return (
    <section className="sec-banner-main">
      <div className="fac-sec1">
        {/* <Banner images={getgallery} speed={600000} /> */}
      </div>
      <div className="fac-sec2">
        <div className="fac-cont">
          <div className="fac-part">
            {/* <p className="fac-heading fac-list-margin-top">Maple</p>
            <p className="facility">Room</p> */}
            {getitem.length > 0
              ? getitem.map((itm, index) => {

                console.log("amin -->", itm);
                return (
                  <div key={itm.id}>
                    <p className="fac-heading">{itm.amenities.name}</p>
                    <p className="facility">{itm.amenities_description}</p>
                  </div>
                );
              })
              : null}
            {/* <p className="fac-heading">Gardenia</p>
            <p className="facility">Prty Lawn</p>
            <p className="fac-heading">Gourmet</p>
            <p className="facility">Multi-Cuisione Restaurant</p>
            <p className="fac-heading">Bhim Thal</p>
            <p className="facility">Biggest Thal Of Rajkot</p> */}
          </div>

          {/* <div className="bann-img-part">
            {getgallery && getgallery.length > 0 ? getgallery.map((gal, index) => {
              return (
                <>
                  {gal.gal_category == 3 ?
                    <>
                      <img
                        src={gal.image_full}
                        className="bann-img-part1-img"
                        alt="facility images"
                      />
                      <div className="bann-part-2">
                        <img
                          src={gal.image_full}
                          className="bann-img-part2-img"
                          alt="facility images"
                        />

                        <img
                          src={gal.image_full}
                          className="bann-img-part3-img"
                          alt="facility images"
                        />
                      </div>
                    </> : null}
                </>
              )
            }) : null}
          </div> */}

          <div className="bnn-img-partt">
            {getgallery && getgallery.length > 0 ? getgallery.map((gal, index) => {
              return (
                <>

                  {gal.gal_category == 3 ?
                    <img src={gal.image_full} className="bnn-img-first" alt="facility image" /> : null}
                </>
              )
            }) : null}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Facility;
