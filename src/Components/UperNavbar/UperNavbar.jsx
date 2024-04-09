import React from "react";
import "./UperNavbar.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { FaTiktok } from "react-icons/fa";
const UperNavbar = () => {
  return (
    <div className="uper-navbar">
      <Container>
        <nav>
          <div className="left-uper-nav ">
            <button className="uper-nav-btn bg-blue">الجمعة 15 أبريل</button>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaXTwitter />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaWhatsapp />
            </Link>
            <Link>
              <TbBrandYoutube />
            </Link>
            <Link>
              <FaTiktok />
            </Link>
          </div>
          <div className="right-uper-nav">
            <div className="right-links">
              <Link>معلومات عنا</Link>
              <Link>اتصل بنا</Link>
              <Link>المنتديات</Link>
              <Link>مدونة</Link>
            </div>

            <div className="d-flex align-items-center gap-2"><img src="/Home/image1.png"></img>28.5° دبي</div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default UperNavbar;
