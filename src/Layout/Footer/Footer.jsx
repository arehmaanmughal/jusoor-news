import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="d-flex flex-column gap-3 flex-lg-row justify-content-lg-between align-items-lg-center ">
          <div className="left-footer ">
            <div className="float-end float-lg-none border-bottom pb-1">
              <p>السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل"</p>
              <div className="d-flex">
                <span>
                  <IoIosArrowBack />
                </span>
                <input type="text" placeholder="لوريم إيبسوم ليس نصاَ" />
              </div>
            </div>
          </div>
          <div className="right-footer ">
            <div className="d-flex flex-column justify-content-end flex-md-row gap-3">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, sapiente?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, sapiente?
                </p>
              </div>
              <div className="footer-logo">
                <Link className="logo" to={"/"}>
                  Logo
                </Link>
              </div>
            </div>
            <div className="d-flex flex-column gap-3 flex-sm-row justify-content-sm-end align-items-sm-center gap-sm-5 ">
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Contact Us</Link>
              <Link to={"/"}>Pod Cast</Link>
              <Link to={"/"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
