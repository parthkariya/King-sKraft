import React from 'react'
import "./ImageGallery.css"

const ImageGallery = () => {

    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    //looping through our images array to create img elements
    const imageCards = getgallerydata.map((image) => (
      <img
        className="image-card"
        onClick={() => showImage(image)}
        src={image.image_full_path}
      />
    ));

    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
      console.log(";;", image);
      setImageToShow(image);
      setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
      setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e) => {
      e.stopPropagation();
      let currentIndex = getgallerydata.indexOf(imageToShow);
      if (currentIndex >= getgallerydata.length - 1) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = getgallerydata[currentIndex + 1];
        console.log("next", nextImage);

        setImageToShow(nextImage);
      }
    };

    //show previous image in lightbox
    const showPrev = (e) => {
      e.stopPropagation();
      let currentIndex = getgallerydata.indexOf(imageToShow);
      if (currentIndex <= 0) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = getgallerydata[currentIndex - 1];
        console.log("prew", nextImage);
        setImageToShow(nextImage);
      }
    };
  return (

          <div>
            <div className="lightbox_main_wrapp">{imageCards}</div>
    
            {lightboxDisplay ? (
              <div id="lightbox" onClick={hideLightBox}>
                <button className="lightbox_btn_wrapp" onClick={showPrev}>
                  <BsFillCaretLeftFill
                    className="lightbox_btn"
                    style={{ color: getdata.color }}
                  />
                </button>
                <img id="lightbox-img" src={imageToShow.image_full_path}></img>
                <button className="lightbox_btn_wrapp" onClick={showNext}>
                  <BsFillCaretRightFill
                    className="lightbox_btn"
                    style={{ color: getdata.color }}
                  />
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      }



export default ImageGallery