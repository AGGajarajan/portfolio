import React from "react";
import { Container } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import CertificationList from "./CertificationList";
import "./certification.css";

function Certification() {
  return (
    <Container fluid className="about-section">
      <Container>
        
        <h1 data-aos="fade-right">
          <span className="primary-header">My Certifications</span>
        </h1>

        <div data-aos="fade-up">
          <CertificationList />
        </div>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Certification;
