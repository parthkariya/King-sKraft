import React, { useEffect, useState } from "react";
import "./HomeOurLocation.css";
import images from "../../constants/images";
import { useLocationContext } from "../../context/location_context";
import { Link } from "react-router-dom";

const HomeOurLocation = (props) => {
  const { location_list, is_loading_home } = useLocationContext();
  const [first, setfirst] = useState();

  useEffect(() => {
    console.log("location_list -->", location_list);
    setfirst(props.ref);
  }, []);

  console.log("location_list",location_list);
  

  return (
    <section className="section-our-location">
      <div className="container-our-location">
        <h1 className="our-location-heading">our locations</h1>
        <p className="our-location-text">
          A collection of luxury hotels & resorts
        </p>
        <div className="part-our-location">
          {location_list &&
            location_list.map((item, index) => {
              console.log("item new---->>>", item);
              return (
                // <div key={index}>
                <>
                  {/* {item.property.length > 1 ? (
                    <Link
                      className="first-part-our-location"
                      key={index}
                      to={`/PlacesPage/${item.name}`}
                      // to={`/PlacesPage`}
                      // state={{
                      //   // item: item.property,
                      //   // place: item.name,
                      //   number: item.number,
                      //   // id: item.id,
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
                        <a href="#" className="our-location-img-link">
                          {item.name}
                        </a>
                      </div>
                    </Link>
                  ) :
                  ( */}
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
                    {/* <Link
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
                        <a href="#" className="our-location-img-link">
                          {item.name}
                        </a>
                      </div>
                    </Link> */}
                  {/* )} */}
                </>
                // </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeOurLocation;
