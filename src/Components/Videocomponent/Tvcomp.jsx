import React, { useState } from "react";
import ReactPlayer from "react-player"; // Import ReactPlayer
import pic from "../../assets/Tv-back.png";
import playButtonIcon from "../../assets/orange orange.png";
import { FaCalendarAlt } from "react-icons/fa";
import "./jusoortv.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Tvcomp = () => {

  return (
    <div className="tv-bg">
      <div className="container">
        <br/>
      <h1 className="tv_header">  TV جسور  </h1>
        <div className="row">
       
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 "  data-aos="fade-up" data-aos-duration="2000">
            <div className="how-we-work-main">
              <div className="image-container">
               <>
                    <div className="tv_card mb-4" >
                      <div className="tv_card_img">
                        <img
                          src={pic}
                          className="img-fluid "
                          alt=""
                          loading="lazy"
                        />
                        <div className="button-tv">

                          <button className="play-button"style={{ cursor: "pointer"}} >نبض المجتمع</button>
                        </div>
                      </div>
                      <div className="tv_img">
                      <p>التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى</p>
                      <span>14 أبريل 2024</span> <FaCalendarAlt />
                      </div>
                   
                      
                    </div>

                    <img
                     className="playbutton-image"
                     src={playButtonIcon}
                      alt="play"
                    />

                  </>
          
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"  data-aos="fade-up" data-aos-duration="2000">
            <div className="how-we-work-main">
              <div className="image-container">
         
                  <>
                    <div className="tv_card mb-4" >
                      <div className="tv_card_img">
                        <img
                          src={pic}
                          className="img-fluid"
                          alt=""
                          loading="lazy"
                        />
                        <div className="button-tv">

                          <button className="play-button"style={{ cursor: "pointer"}} >نبض المجتمع</button>
                        </div>
                      </div>
                      <div className="tv_img">
                      <p>التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى</p>
                      <span>14 أبريل 2024</span> <FaCalendarAlt />
                      </div>
                    </div>

                    <img
                     className="playbutton-image"
                      src={playButtonIcon}
                      alt="play"
                    />

                  </>
                
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Tvcomp;
