import React from "react";
import "./HomeGalleryUpdated.css";
import images from "../../constants/images";
// import imagess from "../../constants/images";
const HomeGalleryUpdated = () => {
  return (
    <div
      style={{ background: "#0c4e62", paddingBottom: "40px", width: "100%" }}
    >
      <div className="main-parent">
        <h2 className="gallery-heading">gallery</h2>
        {/* <ul className="home-gallery-filter">
          <li className="home-gallery-filter-cat">
            all
          </li>

          <li className="home-gallery-filter-cat">our hotels</li>
          <li className="home-gallery-filter-cat">experiences</li>
          <li className="home-gallery-filter-cat">dining</li>
        </ul> */}
      </div>
      <div className="gmain-container">
        <section className="grid-container">
          <figure className="item r-span2">
            <img src={images.prabhuimg18} alt="gallery images" />
          </figure>

          <figure className="item c-span2">
            <img src={images.prabhuimg26} alt="gallery images" />
          </figure>

          {/* <figure className="item c-span2">
            <img src={images.sasanimg11} alt="gallery images" />
          </figure> */}

          <figure className="item c-span2">
            <img src={images.prabhuimg4} alt="gallery images" />
          </figure>

          <figure className="item c-span2">
            <img src={images.prabhuimg2} alt="gallery images" />
          </figure>

          {/* <figure className="item">
            <img src={images.sasanimg14} alt="gallery images" />
          </figure> */}

          <figure className="item c-span2">
            <img src={images.wed3} alt="gallery images" />
          </figure>

          <figure className="item c-span2 ">
            <img src={images.wed8} alt="gallery images" />
          </figure>

          <figure className="item r-span2">
            <img src={images.prabhuimg14} alt="gallery images" />
          </figure>

          {/* <figure class="item">
            <img src={images.wed8} alt="gallery images" />
          </figure>
          <figure class="item">
            <img src={images.wed8} alt="gallery images" />
          </figure> */}
        </section>
      </div>

      {/*for responsive */}

      <div className="res-gallery-image">
        <div className="res-img-box">
          <img src={images.prabhuimg26} alt="gallery images" />

          <div className="res-transparent-box">
            <div className="res-gallery-caption">
              {/* <p>Library</p>
              <p class="res-opacity-low">Architect Design</p> */}
            </div>
          </div>
        </div>

        {/* <div className="res-img-box"> */}
        {/* <img src={images.sasanimg11} alt="gallery images" /> */}

        {/* <div className="res-transparent-box"> */}
        {/* <div className="res-gallery-caption"> */}
        {/* <p>Night Sky</p>
              <p className="res-opacity-low">Cinematic</p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

        <div className="res-img-box">
          <img src={images.prabhuimg4} alt="gallery images" />

          <div className="res-transparent-box">
            <div className="res-gallery-caption">
              {/* <p>Tea Talk</p>
              <p className="res-opacity-low">Composite</p> */}
            </div>
          </div>
        </div>
        <div className="res-img-box">
          <img src={images.prabhuimg18} alt="gallery images" />

          <div className="transparent-box">
            <div className="res-gallery-caption">
              {/* <p>Road</p>
              <p className="res-opacity-low">Landscape</p> */}
            </div>
          </div>
        </div>

        {/* <div className="res-img-box"> */}
        {/* <img src={images.sasanimg14} alt="gallery images" /> */}
        {/* <div className="transparent-box"> */}
        {/* <div className="res-gallery-caption"> */}
        {/* <p>Sea</p>
              <p className="res-opacity-low">Cityscape</p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

        <div className="res-img-box">
          <img src={images.wed3} alt="gallery images" />

          <div className="res-transparent-box">
            <div className="res-gallery-caption">
              {/* <p>Vintage</p>
              <p className="res-opacity-low">Cinematic</p> */}
            </div>
          </div>
        </div>
        <div className="res-img-box">
          <img src={images.wed8} alt="gallery images" />

          <div className="res-transparent-box">
            <div className="res-gallery-caption">
              {/* <p>Vintage</p>
              <p className="res-opacity-low">Cinematic</p> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="res-gal-main">
        <div className="res-gallery-container">
          <input id="res-gallery-item1" type="checkbox" />
          <label
            className="res-gallery-item1"
            for="res-gallery-item1"
            // style="background-image:url(https://picsum.photos/750/750?image=501);"
            style={{
              backgroundImage: `url("https://picsum.photos/750/750?image=501")`,
            }}
          ></label>
          <input id="res-gallery-item2" type="checkbox" />
          <label
            className="res-gallery-item2"
            for="res-gallery-item2"
            style={{
              backgroundImage: `url("https://picsum.photos/750/750?image=501")`,
            }}
          ></label>
          <input id="res-gallery-item3" type="checkbox" />
          <label
            className="res-gallery-item3"
            for="res-gallery-item3"
            style={{
              backgroundImage: `url("https://picsum.photos/750/750?image=501")`,
            }}
          ></label>
          <input id="res-gallery-item4" type="checkbox" />
          <label
            className="res-gallery-item4"
            for="res-gallery-item4"
            style={{
              backgroundImage: `url("https://picsum.photos/750/750?image=501")`,
            }}
          ></label>
          <input id="res-gallery-item5" type="checkbox" />
          <label
            className="res-gallery-item5"
            for="res-gallery-item5"
            style={{
              backgroundImage: `url("https://picsum.photos/750/750?image=501")`,
            }}
          ></label>
          <input id="res-gallery-item6" type="checkbox" />
          <label
            className="res-gallery-item6"
            for="res-gallery-item6"
            style={{
              backgroundImage: `url("https://picsum.photos/750/750?image=501")`,
            }}
          ></label>
          <input id="res-gallery-item7" type="checkbox" />
          <label
            className="res-gallery-item7"
            for="res-gallery-item7"
            style={{
              backgroundImage: `url("https://picsum.photos/750/750?image=501")`,
            }}
          ></label>
          <input id="res-gallery-item8" type="checkbox" />
          <label
            className="res-gallery-item8"
            for="res-gallery-item8"
            style={{
              backgroundImage: `url("https://i.picsum.photos/id/501/750/750.jpg?hmac=NK_RQ6tSvWidEH2rImO1zEU-8JvQ_Ks1SMU4laaM-tI")`,
            }}
          ></label>
          <input id="res-gallery-item9" type="checkbox" />
          <label
            className="res-gallery-item9"
            for="res-gallery-item9"
            style={{
              backgroundImage: `url("https://picsum.photos/750/750?image=501")`,
            }}
          ></label>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default HomeGalleryUpdated;
