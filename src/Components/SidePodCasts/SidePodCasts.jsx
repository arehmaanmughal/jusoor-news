import React from "react";
import "./SidePodCasts.css";
import { CgCalendarDates } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";
import card_img from "../../assets/Rectangle 19.png"
const SidePodCasts = () => {
  const podcasts = [
    {
      imgurl: card_img,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات.",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      imgurl: card_img,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات.",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      imgurl: card_img,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات.",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      imgurl: card_img,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات.",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
  ];
  return (
    <div className="side-podcasts">
      <h1>منشور مشهور</h1>
      <hr />
      <div className="row gy-3 gx-3">
        {podcasts.map((podcast) => (
          <div className="col-sm-12">
            <div class="card border-0">
              <img src={podcast.imgurl} class="podcast-img" alt="..." />
              <div class="card-body">
                <h5 class="title">{podcast.title}</h5>
                <p class="descr">{podcast.descr}</p>
                <p class="date">
                  {podcast.date}
                  <span className="calender-icon">
                    <CgCalendarDates />
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidePodCasts;
