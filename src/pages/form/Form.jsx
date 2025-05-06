import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../common";
import Notification from "../../Utils/Notification";
import { ACCEPT_HEADER, postinquiry_url } from "../../Utils/Constant";
import "./Form.css";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Form = () => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const navigate = useNavigate();
  const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexpMobile = /^[0-9\b]+$/;

  const [get_arrival_date, setArrivalDate] = useState(
    moment(location.state.value2).format("YYYY-MM-DD")
  );
  const [get_departure_date, setDepartureDate] = useState(
    moment(location.state.value).format("YYYY-MM-DD")
  );

  const [get_name, setName] = useState("");
  const [get_number, setNumber] = useState();
  const [get_email, setEmail] = useState("");

  useEffect(() => {
    console.log(" [] -->", location.state.get_place);
  }, []);

  const onHandleTelephoneChange = (e) => {
    let telephone = e.target.value;
    if (telephone === "" || regexpMobile.test(telephone)) {
      setNumber(telephone);
    } else {
      return;
    }
  };

  const clearForm = () => {
    setArrivalDate("");
    setDepartureDate("");
    setName("");
    setNumber("");
    setEmail("");
  };

  const InquiryForm = () => {
    if (get_arrival_date === "") {
      Notification("error", "Error!", "Please select arrival date!");
      return;
    }

    if (get_departure_date === "") {
      Notification("error", "Error!", "Please select departure date!");
      return;
    }

    if (location.state.get_place === undefined) {
      Notification("error", "Error!", "Please select place!");
      return;
    }

    if (get_name === "") {
      Notification("error", "Error!", "Please enter name!");
      return;
    }

    if (get_number === "") {
      alert("Enter the Mobile number....!");
      return;
    } else if (get_number.length < 10 || get_number.length > 10) {
      // alert("Enter valid mobile number...");
      Notification("error", "Error!", "Enter valid mobile number...");

      return;
    }

    if (get_email === "") {
      alert("Enter the Email...!");
      return;
    } else if (regEx.test(get_email) === false) {
      alert("Enter the valid email...!");
      return;
    }

    let formdata = new FormData();

    formdata.append("property_id", location.state.get_place);
    formdata.append("arrival_date", get_arrival_date);
    formdata.append("departure_date", get_departure_date);
    formdata.append("name", get_name);
    formdata.append("number", get_number);
    formdata.append("email", get_email);

    console.log("formdata-->>", formdata);
    axios
      .post(postinquiry_url, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          //  Authorization: "Bearer" + logintoken,
        },
      })
      .then((res) => {
        console.log("respons-->>", res.data);
        if (res.data.success == 1) {
          Notification("success", "Success!", "We'll get to you soon");
          console.log("success");
          // location.push("/");
          navigate("/")
            //  clearCart();
            .clearForm();
        } else {
          Notification("success", "Success!", res.message);
        }
      })

      .catch((err) => {
        console.log("err-->>", err);
        Notification("error", "Error!", err);
      });
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
              "logo": "https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.kingskraft.com/inqueryform{search_term_string}",
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

        <title>Inquiry Form | King's Kraft Hotels & Resorts</title>
        <meta
          name="description"
          content="Inquiry Form | King's Kraft Hotels & Resorts"
        />
      </Helmet>
      <Navbar />
      <div className="form_main_wrapp">
        <div className="form_base_wrapp">
          <h1 className="form_heading">Inquiry Form</h1>
          <div className="form_wrapp">
            <label htmlFor="input" className="form_label">
              Name :
            </label>
            <input
              type="text"
              className="form_input"
              value={get_name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("name ==>", get_name);
              }}
            />
            <label htmlFor="input" className="form_label">
              Number :
            </label>
            <input
              type="number"
              className="form_input"
              value={get_number}
              onChange={(e) => onHandleTelephoneChange(e)}
              maxLength="10"
              required
            />
            <label htmlFor="input" className="form_label">
              Email :
            </label>
            <input
              type="email"
              className="form_input"
              value={get_email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="form_date_wrapp">
              {get_arrival_date ? (
                <div className="arr_date">
                  <h6>Arrival Date : </h6>
                  <p>{moment(get_arrival_date).format("DD/MM/YYYY")}</p>
                </div>
              ) : null}
              {get_departure_date ? (
                <div className="arr_date">
                  <h6>Departure Date : </h6>
                  <p>{moment(get_departure_date).format("DD/MM/YYYY")}</p>
                </div>
              ) : null}
              {/* <div className="arr_date">
                <h6>Place : </h6>
                <p>Jamnagar</p>
              </div> */}
            </div>
            <button className="form_btn" onClick={InquiryForm}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />

      <a
        className="whats-app"
        href="https://api.whatsapp.com/send?phone=919879964314"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="my-float" />
      </a>
    </>
  );
};

export default Form;
