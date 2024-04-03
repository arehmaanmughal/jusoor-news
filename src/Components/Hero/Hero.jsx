import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
const Hero = () => {
  const heronews = [
    {
      date : "01/05",
      title : "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني",
      description : "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم است المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي"
    }
  ]
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
                <img src="/Home/news-img.jpg" className="hero-news-img"></img>
                <button className="position-absolute top-0 end-0 mt-3 me-3 bg-blue text-white news-btn">تستخدم</button>
                <div className="position-absolute bottom-0 bg-img">
                <p className=" mb-0 news-title">صفحات الويب تستخدم لوريم</p>
                </div>
              </div>
              <div className="position-relative">
                <img src="/Home/news-img.jpg" className="hero-news-img"></img>
                <button className="position-absolute top-0 end-0 mt-3 me-3 bg-blue text-white news-btn">تستخدم</button>
                <div className="position-absolute bottom-0 bg-img">
                <p className=" mb-0 news-title">صفحات الويب تستخدم لوريم</p>
                </div>
              </div>
            </div>

            <div className="hero-news">
              {heronews.map((news) => 
              <div>
                <p className="date text-blue">{news.date}</p>
                <p className="title">{news.title}</p>
                <p className="descr">{news.description}</p>
              </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
