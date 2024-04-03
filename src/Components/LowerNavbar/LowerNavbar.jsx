import React, { useState } from "react";
import "./LowerNavbar.css";
import { Container, Offcanvas } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import logo from "../../../public/Home/logo.png";
const LowerNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSearch = () => {
    return "";
  };
  return (
    <div className="lower-navbar">
      <Container>
        <nav className="d-flex justify-content-between align-items-center">
          <div className="left-lower-nav">
            <div className="d-flex gap-2 ">
              <span className="search-btn" onClick={handleSearch}>
                <CiSearch />
              </span>
              <input type="text" placeholder="أخبار البحث" />
            </div>
          </div>
          <div className="middle-lower-nav d-none d-lg-flex  gap-4">
            <Link to={"/"}>بودكاست</Link>
            <Link to={"/contactUs/"}>جسور TV</Link>
            <Link to={"/podCast/"}>فنون</Link>
            <Link to={"/Post/"}>جيبَك</Link>
            <Link to={"/News/"}>نبض المجتمع</Link>
            <Link to={"/PrivacyPolicy/"}>سياسة</Link>
          </div>
          <div className="right-lower-nav d-flex align-items-center gap-2">
            <Link className="">
              <img src={logo}></img>
            </Link>
            <span className="toggle-btn d-lg-none" onClick={handleShow}>
              <IoIosMenu />
            </span>
          </div>

          <Offcanvas
            show={show}
            className="w-75"
            onHide={handleClose}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Link className="">
                <img src={""}></img>Logo
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="offcanvas-links d-flex flex-column gap-4">
                <Link to="/">Home</Link>
                <Link to={"/contactUs/"}>Contact Us</Link>
                <Link to={"/podCast/"}>Pod Cast</Link>
                <Link to={"/Post/"}>Posts</Link>
                <Link to={"/News/"}>News</Link>
                <Link to={"/PrivacyPolicy/"}>Privacy Policy</Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </Container>
    </div>
  );
};

export default LowerNavbar;
