import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import axios from "axios";
import { mobileValidate } from "../../Utils/helpers";
import Notification from "../../Utils/Notification";
import { contactus_url } from "../../Utils/Constant";
import { Helmet } from "react-helmet";
const ContactUs = () => {
  window.scrollTo(0, 0);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");
  const kContactus = async () => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    if (name == "") {
      Notification("error", "Error!", "Please enter your Name!");
      return;
    } else if (email == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (number === "") {
      alert("Enter the Mobile number....!");
      return;
    } else if (number.length < 10 || number.length > 10) {
      // alert("Enter valid mobile number...");
      Notification("error", "Error!", "Enter valid mobile number...");

      return;
    } else if (subject == "") {
      Notification("error", "Error!", "Please enter your Subject!");
      return;
    } else if (description == "") {
      Notification("error", "Error!", "Please enter some Description!");
      return;
    } else {
      const formData = new FormData();
      formData.append("name", name);
      //  formData.append("lastname", "test");
      formData.append("email", email);
      formData.append("number", number);
      formData.append("subject", subject);
      formData.append("description", description);
      //  formData.append("state_id", 12);
      //  formData.append("city_id", "779");
      console.log("formData contact us ", formData);

      const response = await axios
        .post(contactus_url, formData, {
          headers: {
            Accept: "application/x.kingskraft.v1+json",
          },
        })
        .catch((error) => console.error(`Error: ${error}`));
      console.log("response contact us ", response.data);

      if (response.data.success == 1) {
        setname("");
        setemail("");
        setnumber("");
        setsubject("");
        setdescription("");

        Notification(
          "success",
          "Success!",
          "form has been successfully submitted"
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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "King's Kraft",
            url: "https://www.kingskraft.com/",
            logo: "	https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.kingskraft.com/contactus{search_term_string}",
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

        <title>Contact Us | King's Kraft Hotels & Resorts</title>
        <meta
          name="description"
          content="Contact Us | King's Kraft Hotels & Resorts"
        />
      </Helmet>
      <Navbar />

      <section className="contact_sec">
        <div className="contact">
          <div className="c-form">
            <h1 className="contact-us-heading"> Contact Us</h1>
            <form className="c-form">
              <lable className="c-lbl">Name</lable>
              <input
                type="text"
                placeholder=""
                value={name}
                className="c-txt"
                onChange={(e) => setname(e.target.value)}
              />
              {/* <input type="text" className="c-txt" /> */}
              <lable className="c-lbl">Number</lable>
              <input
                type="text"
                placeholder=""
                name="field-name"
                value={number}
                maxLength={10}
                onChange={(e) => {
                  if (mobileValidate(e.target.value)) {
                    setnumber(e.target.value);
                  }
                }}
                className="c-txt"
              />
              {/* <input type="text" className="c-txt" /> */}
              <lable className="c-lbl">Email</lable>
              <input
                type="text"
                placeholder=""
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="c-txt"
              />

              <lable className="c-lbl">Subject</lable>
              <input
                type="text"
                placeholder=""
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
                className="c-txt"
              />
              {/* <input type="text" className="c-txt" /> */}
              <lable className="c-lbl">Descreption</lable>
              <textarea
                placeholder="Please leave comment here..."
                value={description}
                className="c-msg-txt"
                onChange={(e) => setdescription(e.target.value)}
              ></textarea>
              {/* <textarea type="text" className="c-msg-txt" /> */}
              <a
                href="javascript:void(0)"
                className="c-form-btn"
                onClick={() => kContactus()}
              >
                Submit
              </a>
            </form>
          </div>
          <div className="c-details">
            <h2 className="quick-heading">Quick Contact</h2>
            <div className="con-info-flex">
              {/* <HiOutlineMail className="con-info-icon" /> */}
              <p className="c-ulbl mt01">Email Id :</p>
            </div>

            <p className="c-dlbl">info@kingskraft.com</p>
            <div className="con-info-flex">
              {/* <AiOutlinePhone className="con-info-icon" /> */}
              <p className="c-ulbl">Phone :</p>
            </div>
            <p className="c-dlbl">+91 9879964314 | +91 9825290955</p>
            <div className="con-info-flex">
              {/* <GrLocation className="con-info-icon" /> */}
              <p className="c-ulbl">Address :</p>
            </div>
            <p className="c-dlbl">
              Raiko Hotels & Resort LLP, 101 Deep Complex Kotechanagar Main
              Road, Off. Aminmarg Rajkot 360004
            </p>
            {/* <p className="c-ulbl">Office Hours :</p>
            <p className="c-dlbl">10:00 am to 6:00 pm.</p> */}
            <iframe
              width="100%"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118162.55635058424!2d70.63073907086509!3d22.25601322158017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9f86fcba8cb%3A0x777425750a128f3f!2sKing%E2%80%99s%20Kraft%20Rajkot!5e0!3m2!1sen!2sin!4v1665582322944!5m2!1sen!2sin"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              allowFullScreen
            ></iframe>

            <br />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
