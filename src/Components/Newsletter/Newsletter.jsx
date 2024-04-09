import React from "react";
import "./Newsletter.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";


AOS.init();

const Newsletter = () => {
  return (
    <div>
      <div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div
              className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className=" newsletter">
                <div className="container">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h1>اشترك في رسالتنا الإخبارية </h1>
                    <p>اقرأ أخبارنا يوميًا من خلال إشعار البريد الإلكتروني </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-auto">
                  <div>
                    <div className="newsletter-field">
                      <input
                        type="text"
                        class="custom-search-input"
                        placeholder="انضم إلى قناة الواتساب"
                      />
                    </div>
                    <button>
                      {" "}
                      <IoLogoWhatsapp /> افتح الرابط{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="2000" >
                <div className="newsletter-right">
                <div className="container">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h1>اشترك في رسالتنا الإخبارية </h1>
                    <p>اقرأ أخبارنا يوميًا من خلال إشعار البريد الإلكتروني </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-auto">
                  <div>
                    <div className="newsletter-field">
                      <input
                        type="text"
                        class="custom-search-input"
                        placeholder="انضم إلى قناة الواتساب"
                      />
                    </div>
                    <button className="newsletter-right-button">
                      <FaTelegramPlane/> افتح الرابط
                    </button>
                  </div>
                </div>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
