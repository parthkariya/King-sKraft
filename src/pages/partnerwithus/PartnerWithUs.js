import React from "react";
import "./PartnerWithUs.css";
import images from "../../constants/images";
import { Footer, Navbar } from "../../common";
import { Helmet } from "react-helmet";
const PartnerWithUs = () => {
  window.scrollTo(0, 0);

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
                "https://www.kingskraft.com/partnerwithus{search_term_string}",
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

        <title>Partner With Us | King's Kraft Hotels & Resorts</title>
        <meta
          name="description"
          content="Partner With Us | King's Kraft Hotels & Resorts"
        />
      </Helmet>
      <Navbar />
      <section className="sec-partner">
        <div className="parner-parts">
          <div className="partner-part">
            {/* <div className="partner-img-box"> */}
            <img
              className="partner-img"
              src={images.chessking}
              alt="Partner Page Image"
            />
            <p className="partner-img-txt">
              “ Nobody will tell you your responsibility; you have to take it on
              your own.”{" "}
              <span className="partner-img-txt-auth">
                <br />
                Rajesh Ambasana
              </span>
            </p>
            {/* </div> */}
          </div>
          <div className="partner-part2">
            <p className="partner-txt">
              King’s Kraft is a leading brand offering professional Hotel
              Management Solutions with supreme standard. Headed by the dynamic
              team of Ameet Raithatha - Hotel Management Graduate with an
              experience into Culinary art and Hospitality Management and Mohit
              Katrodia - Commerce Graduate with an experience of managing
              finances and execution.
            </p>
            <p className="partner-txt">
              The company has grown with a name that is known for Quality Food,
              Superior Hospitality and Luxurious Room Facilities. We believe
              that the developers of our properties are the stakeholders to our
              success. With a promise to protect their asset, enhance its brand
              value and give the best return on investment. We ensure that the
              owner can relax and enjoy the fruits of their investment.
            </p>
            <p className="partner-txt">
              If you are looking for a professional company to de-risk your
              investment, drive financial results and ensure operational
              excellence, than King’s Kraft is the right choice for your
              property.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PartnerWithUs;
