import React, { useState } from "react";
import "./HeadLine.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosFlash } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeadLine = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [forwardClicked, setForwardClicked] = useState(false);
  const [backwardClicked, setBackwardClicked] = useState(false);
  const headlines = [
    {
      title: " لوريم إيبسوم",
      news: " خلافاَ خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، ليس ليس ليس ليس ليس",
    },
    {
      title: " لوريم إيبسوم",
      news: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل",
    },
    {
      title: " لوريم إيبسوم",
      news: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل",
    },
    {
      title: " لوريم إيبسوم",
      news: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل",
    },
    {
      title: " لوريم إيبسوم",
      news: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل",
    },
  ];
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    speed: 800,
    pauseOnHover: true,
    arrows: false,
  };
  const goNext = () => {
    setForwardClicked(true);
    setBackwardClicked(false);
    sliderRef.slickNext();
    console.log(forwardClicked);
    console.log(sliderRef);
  };
  const goPrev = () => {
    setForwardClicked(false);
    setBackwardClicked(true);
    sliderRef.slickPrev();
    console.log(backwardClicked);
  };
  return (
    <div className="headline">
      <Container>
        <div className="headline-area">
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            {headlines.map((headline, index) => (
              <div
                className="d-flex flex-column flex-md-row justify-content-end gap-md-4"
                key={index}
              >
                <div className="news-section order-1 order-md-0">
                  <p className="news font-bold mb-0">{headline.news}</p>
                </div>
                <div className="title-section">
                  <p className="title text-blue mb-0">
                    : {headline.title}{" "}
                    <span>
                      <IoIosFlash />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <div className="d-flex gap-2">
            <button
              className={`btn-arrow-left d-flex justify-content-center align-items-center backward ${
                backwardClicked ? "clicked" : ""
              }`}
              onClick={goPrev}
            >
              <IoIosArrowBack />
            </button>
            <button
              className={`btn-arrow-right d-flex justify-content-center align-items-center forward ${
                forwardClicked ? "clicked" : ""
              }`}
              onClick={goNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeadLine;
