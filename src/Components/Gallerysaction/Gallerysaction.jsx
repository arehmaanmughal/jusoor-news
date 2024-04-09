import React from "react";
import "./Gallerysaction.css";
import Gallerydata from "../Gallerydata/Gallerydata";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();

const Gallerysaction = () => {
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3"  data-aos="fade-up" data-aos-duration="2000">
            {Gallerydata.sacion &&
              Gallerydata.sacion.map((item, index) => (
                <div className="blog_card mb-4" key={index}>
                  <div className="blog_card_img">
                    <img
                      src={item.image}
                      className="img-fluid blog_img"
                      alt=""
                      loading="lazy"
                    />
                    <div className="button-div">
                      <button>{item.title}</button>
                    </div>
                  </div>
                  <div className="bottom_img">{item.paragraph}</div>
                </div>
              ))}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 feature-image"  data-aos="fade-up" data-aos-duration="2000">
            {Gallerydata.rightsaction &&
              Gallerydata.rightsaction.map((item, index) => (
                <div className="blog_card" key={index}>
                  <div className="blog_card_img">
                    <img
                      src={item.image}
                      className="img-fluid blog_img"
                      alt=""
                      loading="lazy"
                    />
                    <div className="button-div">
                      <button>{item.title}</button>
                    </div>
                  </div>
                  <div className="bottom_img">{item.paragraph}</div>
                </div>
              ))}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3"  data-aos="fade-up" data-aos-duration="2000">
            {Gallerydata.sacion &&
              Gallerydata.sacion.map((item, index) => (
                <div className="blog_card right-image-saction mb-4" key={index}>
                  <div className="blog_card_img">
                    <img
                      src={item.image}
                      className="img-fluid blog_img"
                      alt=""
                      loading="lazy"/>
                    <div className="button-div">
                      <button>{item.title}</button>
                    </div>
                  </div>
                  <div className="bottom_img">{item.paragraph}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerysaction;
