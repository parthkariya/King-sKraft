import React, { useEffect } from "react";
import { Footer, Navbar } from "../common";

const CommingSoon = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          background: "#0c4e62",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 style={{ color: "#dcca87", fontWeight: "bold" }}>
            Comming Soon ...
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommingSoon;
