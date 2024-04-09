import React from "react";
import Galleryimage from "../../assets/Rectangle 19.png";
import { FaCalendarAlt } from "react-icons/fa";
import cakeimage from "../../assets/cakes.png";
import podcastimage from "../../assets/podcast.png";
import podcasttwo from "../../assets/podcats01.png";
import "./categorysaction.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const categorysaction = () => {
  return (
    <div>
      <div className="container p-0">
        <div className="row">
          <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">
            <div className="container">
            <h1 className="category-header">الأكثر شعبية</h1>
              <div className="row">
             
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <div className="blog_card">
                    <div className="blog_card_img">
                      <img
                        src={ Galleryimage}
                        className="img-fluid blog_img"
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                    <div className="button_img">
                      <div className="category-image">
                        <button>جسور</button>
                      </div>
                    </div>

                    <div className="blog_card_desk">
                    أصوات مرفوعة: نسيج من الاحتجاجات
                    </div>
                    <p className="blog_card_para">
                      شارك شخصان في تسجيل بودكاست مفعم بالحيوية، يتبادلان
                      الأفكار في مكان تلتقي
                    </p>

                    <div className="blog_card_date">
                      <span>14 أبريل 2024</span> <FaCalendarAlt className="blog-icon" />
                    </div>
                  </div>
             
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="blog_card">
                    <div className="blog_card_img">
                      <img
                        src={podcastimage}
                        className="img-fluid blog_img"
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                    <div className="button_img">
                      <div className="category-image">
                        <button>جسور</button>
                      </div>
                    </div>

                    <div className="blog_card_desk">
                    أصوات مرفوعة: نسيج من الاحتجاجات.
                    </div>
                    <p className="blog_card_para">
                      شارك شخصان في تسجيل بودكاست مفعم بالحيوية، يتبادلان
                      الأفكار في مكان تلتقي
                    </p>
                    <div className="blog_card_date">
                      <span >14 أبريل 2024</span > <FaCalendarAlt className="blog-icon" />
                    </div>
                  </div>
             
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="blog_card">
                    <div className="blog_card_img">
                      <img
                        src={podcasttwo}
                        className="img-fluid blog_img"
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                    <div className="button_img">
                      <div className="category-image">
                        <button>جسور</button>
                      </div>
                    </div>

                    <div className="blog_card_desk">
                    أصوات مرفوعة: نسيج من الاحتجاجات.
                    </div>
                    <p className="blog_card_para">
                      شارك شخصان في تسجيل بودكاست مفعم بالحيوية، يتبادلان
                      الأفكار في مكان تلتقي
                    </p>
                    <div className="blog_card_date">
                      <span>14 أبريل 2024</span> <FaCalendarAlt className="blog-icon" />
                    </div>
                  </div>
             
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3"  data-aos="fade-up" data-aos-duration="2000">
            <img src={cakeimage} alt="" style={{width:"100%"}}/>
             </div>
        </div>
      </div>
    </div>
  );
};

export default categorysaction;
