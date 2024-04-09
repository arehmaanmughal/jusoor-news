import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import box_img from "../../assets/gallery-3.png";
import box_img1 from "../../assets/gallery-4.png";
import "./Hero.css";
import { IoIosArrowDropleft } from "react-icons/io";
const Hero = () => {
  const heronews = [
    {
      date: "01/05",
      title:
        "شركة نيوم للهيدروجين الأخضر تحصل على تمويل بقيمة 8.4 مليار دولار من 23 بنكًا",
      description:
      "أبرمت شركة نيوم للهيدروجين الأخضر (NGHC) مؤخرًا اتفاقيات مالية مع 23 بنكًا وشركة استثمارية محلية وإقليمية ودولية، مما يمثل علامة بارزة في المشروع."
    },
  ];
  return (
    <div className="hero">
      <video autoPlay muted loop className="bg-video">
        <source src="Home/sample_1920x1080.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <Container>
          <div className="d-flex flex-column align-items-end gap-3 flex-lg-row justify-content-lg-between align-items-lg-center">
            <div className="d-flex gap-3 flex-column flex-md-row flex-lg-column gap-3 order-1 order-lg-0">
              <div className="position-relative">
                <img src={box_img} className="hero-news-img"></img>
                <button className="position-absolute top-0 end-0 mt-3 me-3 bg-blue text-white news-btn">
                  مؤجل
                </button>
                <div className="position-absolute bottom-0 bg-img">
                  <p className=" mb-0 news-title">
                    نقطة الأزمة: الصراع ودماره يتكشفان
                  </p>
                </div>
              </div>
              <div className="position-relative">
                <img src={box_img1} className="hero-news-img"></img>
                <button className="position-absolute top-0 end-0 mt-3 me-3 bg-blue text-white news-btn">
                  بودكاست
                </button>
                <div className="position-absolute bottom-0 bg-img">
                  <p className=" mb-0 news-title">
                    {" "}
                    القوة: البراعة العسكرية المعروضة
                  </p>
                </div>
              </div>
            </div>
          
            <div className="hero-news">
              {heronews.map((news) => (
                <div>
                  <div className="date-section">
                    <p className="date">{news.date}</p>
                  </div>
                  <div className="overview">
                    <p className="title">{news.title}</p>
                    <p className="descr">{news.description}</p>
                    <button className="hero-btn">
                <span className="">
                  <IoIosArrowDropleft />
                </span>
                التالي
              </button>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
