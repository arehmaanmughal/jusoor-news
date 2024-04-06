import React from "react";
import "./PodCastSideBar.css";
import { CgCalendarDates } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";
import card_img from "../../assets/Rectangle 19.png";
const PodCastSideBar = () => {
  const news = [
    {
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: "",
    },
    {
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: "",
    },
    {
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: "",
    },
    {
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: "",
    },
  ];
  return (
    <div className="podcast-sidebar">
      <h1>الشائع</h1>
      <hr />
      <div className="row gy-3 gx-3">
        {news.map((current_news, index) => (
          <div className="col-sm-6 col-lg-12  " key={index}>
            <div className="podcast-sidebar-main">
              <div className="row ">
                <div className="col-12 order-1 col-lg-8 order-lg-0">
                  <p className="title">{current_news.title}</p>
                  <p className="descr">{current_news.descr}</p>
                  <p className="date">
                    {current_news.date}
                    <span className="calender-icon">
                      <CgCalendarDates />
                    </span>
                  </p>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-end">
                    <img className="news-img" src={current_news.img_url} />
                  </div>
                </div>
              </div>

              <div className="audio-section ">
                <div className="audio-play">
                  <span className="audio-time">10:23</span>
                </div>
                <div className="">
                  <span className="play-btn text-blue">
                    <FaCirclePlay />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodCastSideBar;
