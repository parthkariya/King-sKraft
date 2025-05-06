import React from "react";
import "./HomeGallery.css";
import images from "../../constants/images";
const HomeGallery = () => {
  return (
    <section className="section-home-gallery">
      <div className="container-gallery">
        <h2 className="gallery-heading">gallery</h2>
        <ul className="home-gallery-filter">
          <li className="home-gallery-filter-cat">all</li>
          <div className="line"></div>
          <li className="home-gallery-filter-cat">our hotels</li>
          <li className="home-gallery-filter-cat">experiences</li>
          <li className="home-gallery-filter-cat">dining</li>
        </ul>
        <div class="gallery">
          <div class="gallery-item">
            <img src={images.heroimg1} alt="Hotel Image" />
          </div>
          <figure class="gallery-item">
            <img src={images.heroimg2} alt="Hotel Image" />
          </figure>
          <figure class="gallery-item">
            <img src={images.heroimg3} alt="Hotel Image" />
          </figure>
          <figure class="gallery-item">
            <img src={images.heroimg4} alt="Hotel Image" />
          </figure>
          <figure class="gallery-item">
            <img src={images.heroimg5} alt="Hotel Image" />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery6}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery7}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery8}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery9}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery10}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery11}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery12}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery1}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery2}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery3}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery4}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery5}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery6}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={images.homegallery7}
              alt="Photo of beautiful arange food"
            />
          </figure>
          <figure class="gallery-item">
            <img src={images.heroimg1} alt="Photo of beautiful arange food" />
          </figure>
          <figure class="gallery-item">
            <img src={images.heroimg2} alt="Photo of beautiful arange food" />
          </figure>
          <figure class="gallery-item">
            <img src={images.heroimg3} alt="Photo of beautiful arange food" />
          </figure>
          <figure class="gallery-item">
            <img src={images.heroimg4} alt="Photo of beautiful arange food" />
          </figure>
          <figure class="gallery-item">
            <img src={images.heroimg5} alt="Photo of beautiful arange food" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
