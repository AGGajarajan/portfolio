import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import artisticoders from "../../Assets/Projects/artisticoders.png";
import studentApplication from "../../Assets/Projects/studentApplication.png";
import CaptchaSystem from "../../Assets/Projects/CaptchaSystem.png";
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
           <strong className="Fluorescent-Blue"> My Recent Works </strong>
        </h1>
        <p>The projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={artisticoders}
              title="Food Delivery Application"
              description="The application features a user-friendly interface built with React.js, a Node.js backend for server-side functionality, and MySQL (phpMyAdmin) for data storage and management."
              ghLink="https://github.com/AGGajarajan/Food-App"
              demoLink="https://aggajarajan.github.io/Food-App/"  
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
          <ProjectCard
              imgPath={studentApplication}
              title="CRUD Application"
              description="A small Java based Student Management Application which performs Create, 
              Read, Update and Delete operations and stores the data in MySQL Database. "
              ghLink="https://github.com/AGGajarajan/crud-operation"
              demoLink="#"  
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
          <ProjectCard
              imgPath={CaptchaSystem}
              title="Image CAPTCHA Security"
              description="Developed a secure CAPTCHA system using a novel method combining adversarial examples 
              with neural style transfer. Improved CAPTCHA robustness against machine learning attacks. "
              ghLink="#"
              demoLink="#"  
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
