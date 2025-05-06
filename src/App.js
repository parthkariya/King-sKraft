import "./App.css";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import PinewoodResortSing from "./pages/PinewoodResortSing";
import { Footer, Navbar } from "./common";
import Hotel1 from "./pages/hotel1/Hotel1";
import { Form, PlacesPage } from "./pages";
import WedAndRes from "./pages/WedAndRes";
import HotelPage from "./pages/HotelPage";
import { FaWhatsapp } from "react-icons/fa";
import FrontPage from "./pages/FrontPage";
import CommingSoon from "./pages/CommingSoon";
import PartnerWithUs from "./pages/partnerwithus/PartnerWithUs";
import ContactUs from "./pages/contactUs/ContactUs";
// import Review from "./pages/review";
function App() {
  return (
    <>
      {/* <BrowserRouter basename="kk"> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<FrontPage />} />
          {/* <Route path="/review" element={<Review />} /> */}
          {/* <Route path="/pinewoodsingle" element={<PinewoodResortSing />} /> */}
          <Route path="/wedding" element={<WedAndRes />} />
          <Route path="/form" element={<Form />} />
          <Route path="/PlacesPage/:id" element={<PlacesPage />} />
          <Route path="/hotel/:id" element={<Hotel1 />} />
          <Route path="/hotelpage" element={<HotelPage />} />
          {/* <Route path="/commingsoon" element={<CommingSoon />} /> */}
          <Route path="partnerwithus" element={<PartnerWithUs />} />
          <Route path="contactus" element={<ContactUs />} />
          {/* <Route component={<FrontPage />} /> */}
          {/* <Route path="*" element={<FrontPage />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
