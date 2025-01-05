import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "30px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">About Me</span>
            </h1>
            <div data-aos="fade-up">
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ padding:"30px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              width="80%"
              height="80%"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>
        <h1 data-aos="fade-right" style={{padding:"30px"}}>
          <span className="primary-header" >My Skills</span>
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right" style={{padding:"30px"}}>
          <span className="primary-header">Tools</span>
        </h1>
        <div data-aos="fade-up" style={{padding:"30px"}}>
          <Toolstack data-aos="fade-up" />
        </div>
        <Github />
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
