import React from "react";
import images from "../../constants/images";
import "./Key.css";

const Key = () => {
  return (
    <section className="sec-key">
      <div className="key-main">
        <div className="blog-submain">
          <div className="blog-part1-txt-bg">
            <p className="blog-part1-txt">
              CREATING SMILES SINCE{" "}
              <span className="blog-part1-digit"> 25 </span>YEARS
            </p>
          </div>
          <div className="key-img-box">
            <img src={images.keyimg} className="key-img" alt="key image" />
          </div>
        </div>
        <div className="key-submain2">
          <div className="key-submain2-txt-part">
            <p className="key-submain2-txt">With more than 25 years of in-depth
              experience in Hotel & Resort Management
              and Mega Event Management, King’s Kraft
              is the most reliable and upcoming brand
              name across Gujarat in delivering customer
              satisfaction.
            </p>
            <p className="key-submain2-txt-sec">“ Product are made in factory;
              Brands are build in the mind.”<br />

            </p>
            <span className="key-submain2-txt-auth">Walter Landor</span>
            <p className="key-submain2-digit">1000+</p>
            <h3 className="key-submain2-last">Successful Events</h3>
          </div>
          <div className="key-submain2-txt-part2">
            <div className="key-submain2-logo-part">
              <div className="key-logo-bg">
                <img src={images.keylogo3} className="keylogo-sec-part" alt="logo" />
              </div>
              <p>Project Management Consultant</p>

            </div>
            <div className="key-submain2-logo-part">
              <div className="key-logo-bg">
                <img src={images.keylogo1} className="keylogo-sec-part" alt="logo" />
              </div>
              <p>Hotel & Resort Management
              </p>

            </div>
            <div className="key-submain2-logo-part">
              <div className="key-logo-bg">
                <img src={images.keylogo2} className="keylogo-sec-part" alt="logo" />
              </div>
              <p>Wedding Planners</p>

            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Key;
