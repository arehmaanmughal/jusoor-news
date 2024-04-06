import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../../public/Home/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="d-flex flex-column gap-3 flex-lg-row justify-content-lg-between align-items-lg-center ">
          <div className="left-footer ">
            <div className="float-end float-lg-none border-bottom pb-1">
              <p>إشترك في رسائلنا الإخبارية الأسبوعية</p>
              <div className="d-flex">
                <span>
                  <IoIosArrowBack />
                </span>
                <input type="text" placeholder="أدخل عنوان البريد الإلكتروني"/>
              </div>
            </div>
          </div>
          <div className="right-footer ">
            <div className="d-flex flex-column justify-content-end flex-md-row gap-3">
              <div>
                <p>
                تواصل معنا من خلال ملفاتنا الصوتية المتنوعة، وانغمس في عالم من الحوار الثقافي. ابق على اطلاع بأحدث حلقاتنا وقصصنا المميزة من خلال الاشتراك في النشرة الإخبارية لدينا.
                </p>
                
              </div>
              <div className="footer-logo">
                <Link className="logo" to={"/"}>
                  <img src={logo}></img>
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column gap-3 flex-sm-row justify-content-sm-end align-items-sm-center gap-sm-5 ">
              <Link to={"/"}>تواصل معنا</Link>
              <Link to={"/"}>إشعار الخصوصية</Link>
              <Link to={"/"}>إشعار الخصوصية</Link>
              <Link to={"/"}>وظائف شاغرة </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
