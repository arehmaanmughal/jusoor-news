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
        <nav className="d-flex justify-content-between align-items-center">
          <div className="left-uper-nav d-flex align-items-center gap-2 ">
            <button className="uper-nav-btn bg-blue">Login</button>
            <Link>
              <span className="text-blue"><FaFacebookF /></span>
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
          <div className="right-uper-nav d-none d-md-flex gap-2 ">
            <div className="d-flex gap-3 pe-3 border-end">
              <Link>Link1</Link>
              <Link>Link2</Link>
              <Link>Link3</Link>
              <Link>Link4</Link>
            </div>

            <Link>Link5</Link>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default UperNavbar;
