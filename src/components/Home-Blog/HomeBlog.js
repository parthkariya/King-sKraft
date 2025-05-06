import React from "react";
import "./HomeBlog.css";
import images from "../../constants/images";
const HomeBlog = () => {
  return (
    <>
      <section className="section-home-blog">
        <div className="container-home-blog">
          <h2 className="home-blog-main-heading">blog</h2>
          <div className="blog-part">
            <div class="home-blog">
              <img src={images.homeblogimg1} alt="Blog Image" />
              <div class="blog-box">
                <h4 className="home-blog-heading">City Palace</h4>
                <p className="home-blog-desc">
                  Standing on the east bank of Lake Pichola is a massive series
                  of palaces built at different times from 1559. The balconies
                  of the palace provide panoramic views of the “Jag Niwas.
                </p>
                <a href="#" target="_blank" className="home-blog-link">
                  [read more ]
                </a>
              </div>
            </div>
            <figure class="home-blog">
              <img src={images.homeblogimg2} alt="Blog Image" />
              <div class="blog-box">
                <h4 className="home-blog-heading">Fateh Sagar Lake</h4>
                <p className="home-blog-desc">
                  Fateh Sagar Lake is situated in the north of Lake Picholas. It
                  was originally built by Maharana Jai Singh in the year 1678
                  AD, but later on reconstructed and extended.
                </p>
                <a href="#" target="_blank" className="home-blog-link">
                  [read more]
                </a>
              </div>
            </figure>
            <figure class="home-blog">
              <img src={images.homeblogimg3} alt="Blog Image" />
              <div class="blog-box">
                <h4 className="home-blog-heading">Mountain Biking</h4>
                <p className="home-blog-desc">
                  From meandering forest paths to challenging off-road mountain
                  trails. Get your heart pumping and feel alive with a Himalayan
                  mountain biking experience.
                </p>
                <a href="#" target="_blank" className="home-blog-link">
                  [read more]
                </a>
              </div>
            </figure>
            <figure class="home-blog">
              <img src={images.homeblogimg4} alt="Blog Image" />
              <div class="blog-box">
                <h4 className="home-blog-heading">Tobogganing</h4>
                <p className="home-blog-desc">
                  Because Kufri is a hill station and is nestled among the
                  mountain ranges and peaks all around, it isn’t surprising at
                  all that paragliding is one of the top adventure sports in
                  Kufri.
                </p>
                <a href="#" target="_blank" className="home-blog-link">
                  [read more]
                </a>
              </div>
            </figure>
          </div>
          <div class="home-blog-view-more-part">
            <a href="#" class="home-blog-view-more-link">
              View more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeBlog;
