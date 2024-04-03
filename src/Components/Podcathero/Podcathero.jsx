import React from "react";
import "./Podcathero.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoIosArrowDropleft } from "react-icons/io";
// import { useTranslation } from 'react-i18next';

const Podcathero = () => {
  // const [t] = useTranslation("global");
  return (
    <div className="podcast-hero d-flex align-items-center">
      <div className="container d-flex justify-content-end">
        <div className="podcast-hero-content">
          <div className="date d-flex justify-content-end">
          <span className="text-blue">01/05</span>
          </div>
          <div className="content">
          <h1>استمع إلى التحول – البودكاست الرسمي لجسور</h1>
          <p>
            أبرمت شركة نيوم للهيدروجين الأخضر (NGHC) مؤخرًا اتفاقيات مالية مع 23
            بنكًا وشركة استثمارية محلية وإقليمية ودولية، مما يمثل علامة بارزة في
            المشروع.
          </p>
          <div className="podcast-hero-btns d-flex justify-content-end gap-3">
            <button className="btn-1"><span className="pe-3"><IoIosArrowDropleft/></span>التالي</button>
            
            <button className="btn-2">العب الان<span className="ps-3"><AiOutlinePlayCircle/></span></button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcathero;
