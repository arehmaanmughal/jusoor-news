import React from "react";
import "./AuthorPodCast.css";
import { CgCalendarDates } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";
const AuthorPodCast = () => {
  const podcasts = [
    {
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
  ];
  return (
    <div className="author-podcast">
      <h1>اسم التصنيف</h1>
      <div className="row gy-3 gx-3">
        {podcasts.map((podcast) => (
          <div className="col-sm-6">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorPodCast;
