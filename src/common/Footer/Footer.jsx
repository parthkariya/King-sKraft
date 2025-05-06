import React, { useState } from "react";
import "./Footer.css";
import images from "../../constants/images";
import { MdOutlineEmail } from "react-icons/md";
import { GrFacebookOption, GrLocationPin, GrPhone } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import axios from "axios";
import Notification from "../../Utils/Notification";
import { subscribes } from "../../Utils/Constant";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { mobileValidate } from "../../Utils/helpers";
const Footer = () => {
  const [email, setemail] = useState("");

  const kNews = async () => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    if (email == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else {
      const formData = new FormData();
      //  
      formData.append("email", email);
      console.log("formData contact us ", formData);

      const response = await axios
        .post(subscribes, formData, {
          headers: {
            Accept: "application/x.kingskraft.v1+json",
          },
        })
        .catch((error) => console.error(`Error: ${error}`));
      console.log("response contact us ", response.data);

      if (response.data.success == 1) {
        setemail("");
        Notification(
          "success",
          "Success!",
          "Subscribed"
        );
        return;
      } else {
        Notification("error", "Error!", "please enter valid data!");
        return;
      }
    }
  };
  return (
    <>
      <section className="section-footer-top">
        <div className="container-footer-top">
          <div className="footer-top-part">
            <div className="footer-top-sub-part">
              <MdOutlineEmail className="footer-top-eicon" />
              <h4 className="footer-top-part-txt">NEWS & OFFERS </h4>
            </div>

            <div className="footer-top-sub-part">
              <input
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="footer-top-inp"
                placeholder="Your email address"
              />
              {/* {footer-top-singup } */}
              <button className="gift-btn"><a
                href="javascript:void(0)"
                onClick={() => kNews()}
                className="footer-news-btn-subscribe" >
                Subscribe
              </a></button>
            </div>
            <div className="footer-top-sub-part">
              <a href="https://www.facebook.com/KingsKraftIndia?mibextid=ZbWKwL" target="_blank"><GrFacebookOption className="footer-top-icon" /></a>
              <a href="https://www.instagram.com/kingskraft.hotel/?igshid=YmMyMTA2M2Y%3D" target="_blank"> <RiInstagramFill className="footer-top-icon" /></a>
              {/* <a href="https://twitter.com/i/flow/login" target="_blank"><AiOutlineTwitter className="footer-top-icon" /></a> */}
            </div>
          </div>
        </div>
      </section>
      <div className="footer-center">
        <div className="container-footer-top">
          <div className="footer-center-part">
            <div className="footer-center-sub-part">
              <div className="footer-logo-part">
                <img
                  src={images.kinglogoup}
                  alt="brand logo"
                  className="footer-logo"
                />
                {/* <p className="foo-logo-text">Hotels & Resorts</p> */}
              </div>
            </div>
          </div>
          {/* <div className="footer-center-part">
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#">Our Hotel</a>
              </li>
              <li className="footer-link">
                <a href="#">Experiencs</a>
              </li>
              <li className="footer-link">
                <a href="#">Events</a>
              </li>
              <li className="footer-link">
                <a href="#">Special Offers</a>
              </li>
              <li className="footer-link">
                <a href="#">Media</a>
              </li>
              <li className="footer-link">
                <a href="#">About</a>
              </li>
              <li className="footer-link">
                <a href="#">Partner With Us</a>
              </li>
              <li className="footer-link">
                <a href="#">Blog</a>
              </li>
              <li className="footer-link">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div> */}
          <div className="footer-center-part">
            <p className="footer-add-heading">Corporate Office :</p>
            <h5 className="footer-brand-name">Raiko Hotels & Resort LLP</h5>
            <p className="footer-addr">
              101 Deep Complex Kotechanagar Main Road, Off. Aminmarg Rajkot
              360004
            </p>
            <div className="foot-cont-wrapp">
              <div className="foot-num-wrapp">
                <FaPhoneAlt className="footer-con-icon" />
                <div className="foot-num">
                  <a href="tel:9879964314">9879964314</a>
                  <div className="svr"></div>
                  <a href="tel:9825290955">9825290955</a>
                </div>
              </div>
              <div className="foot-mail-wrapp">
                <div className="foot-mail-single">
                  <IoMdMail className="footer-con-icon" />
                  <a href="mailto:kingskraft.com" className="footer-social-linkk">info@kingskraft.com</a>
                </div>
                <div className="foot-mail-single">
                  <FaFacebookSquare className="footer-con-icon" />
                  {/* <a href="mailto:kingskraft.com">kingskraftindia</a> */}
                  <a href="https://www.facebook.com/KingsKraftIndia?mibextid=ZbWKwL" target='_blank' className="footer-social-linkk">King's Kraft Hotels & Resorts
                  </a>
                </div>
              </div>
            </div>
            {/* <ul className="footer-con-links">
              <li className="footer-con-link">
                <HiOutlineLocationMarker className="footer-con-icon" />
                <p className="footer-addr">
                  101 Deep Complex Kotechanagar Main Road,
                  <br />
                  Off. Aminmarg Rajkot 360004
                </p>
              </li>
              <li className="footer-con-link left-padding-footer-email">
                <MdOutlineEmail className="footer-con-icon" />
                <p className="footer-addr">
                  <a href="mailto:kingskraft.com">info@kingskraft.com</a>
                </p>
              </li>
              <div className="footer-contact">
                <li className="footer-con-link">
                  <RiPhoneLine className="footer-con-icon" />
                  <p className="footer-addr">
                    <a href="tel:9879964314">9879964314</a>
                  </p>
                </li>
                <li className="footer-con-link">
                  <RiPhoneLine className="footer-con-icon" />
                  <p className="footer-addr">
                    <a href="tel:9825290955">9825290955</a>
                  </p>
                </li>
              </div>
            </ul> */}

            <img src={images.qrcode} style={{width:"100px",height:"100px",marginTop:"1rem"}}/>
            <p style={{color:"var(--color-golden)",marginBottom:"0px"}}>Scan this QR code to get our brochure.</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2025 King's Kraft All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
