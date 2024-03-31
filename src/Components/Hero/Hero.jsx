import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop id="myVideo">
        <source src="assets/sample_1920x1080.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <Container>
          <Row>
            <Col>
              <Row>
                <Col>
                  <img src="assets/news-img.jpg" className="hero-news-img" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src="assets/news-img.jpg" className="hero-news-img" />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <img src="assets/news-img.jpg" className="hero-news-img" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src="assets/news-img.jpg" className="hero-news-img" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
