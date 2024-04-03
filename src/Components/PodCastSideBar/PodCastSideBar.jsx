import React from "react";
import "./PodCastSideBar.css";
import newsImg from "../../../public/PodCast/Rectangle 19.png";
import { CgCalendarDates } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";
const PodCastSideBar = () => {
  const news = [
    {
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: "../../../public/PodCast/Rectangle 19.png",
      audio_url: "",
    },
    {
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: "../../../public/PodCast/Rectangle 19.png",
      audio_url: "",
    },
    {
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: "../../../public/PodCast/Rectangle 19.png",
      audio_url: "",
    },
    {
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: "../../../public/PodCast/Rectangle 19.png",
      audio_url: "",
    },
  ];
  return (
    <div className="podcast-sidebar">
      <h1>الشائع</h1>
      <hr />
      <div className="row gap-3">
      {news.map((current_news, index) => (
        <div className="col-12 podcast-sidebar-main " key={index}>
          <div className="row px-0">
            <div className="col-8">
              <p className="title">{current_news.title}</p>
              <p className="descr">{current_news.descr}</p>
              <p className="date">
                {current_news.date}
                <span className="calender-icon">
                  <CgCalendarDates />
                </span>
              </p>
            </div>
            <div className="col-4 pe-0">
              <div className="d-flex justify-content-end">
                <img className="news-img" src={current_news.img_url} />
              </div>
            </div>
          </div>
          <div className="row mx-0 px-0 audio-section align-items-center py-2">
            <div className="col-10">
              <div className="audio-play">
                <span className="audio-time">10:23</span>
              </div>
            </div>
            <div className="col-2">
              <span className="play-btn text-blue d-flex align-items-center justify-content-end">
                <FaCirclePlay />
              </span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PodCastSideBar;
