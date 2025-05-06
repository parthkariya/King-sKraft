import "./Banner.css";
const Banner = ({ images, speed = 30000 }) => {
  console.log("ggg-=-=-=>", images);
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }} className="bann-sec">
          {images.map(({ id, image_full }) => (
            <div className="scr_image" key={id}>
              <img src={image_full} className="bann-img" alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }} className="bann-sec">
          {images.map(({ id, image_full }) => (
            <div className="scr_image" key={id}>
              <img src={image_full} className="bann-img" alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }} className="bann-sec">
          {images.map(({ id, image_full }) => (
            <div className="scr_image" key={id}>
              <img src={image_full} className="bann-img" alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
