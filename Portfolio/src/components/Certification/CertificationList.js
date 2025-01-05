import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import nptel from "../../Assets/Certifications/nptel.png";
import microsoft from "../../Assets/Certifications/microsoft.jpeg";
// import Fullstack from "../../Assets/Certifications/simplilearn.png";
//import simplilearn from "../../Assets/Certifications/simplilearn.png";
import udemy from "../../Assets/Certifications/Udemy.png";
import apssdc from "../../Assets/Certifications/apssdc.png";
import hackerrank from "../../Assets/Certifications/hackerrank.png";
import letsupgrade from "../../Assets/Certifications/letsupgrage.jpeg";

function CertificationList() {
  const certificates = [
    {
      imgSrc: nptel,
      imgAlt: "nptel",
      link: "https://drive.google.com/file/d/1qzb2d-GiJlzIFASRzl3E2aXRgPourJhN/view?usp=drive_link",
      name: "NPTEL",
      course: "Programming in Java"
    },
    {
      imgSrc: microsoft,
      imgAlt: "microsoft",
      link: "https://drive.google.com/file/d/1iMPKFEq4TLN7HchZIb2wdqyaKhYvnrsJ/view?usp=share_link",
      name: "MICROSOFT",
      course: "Azure Data Scientist Associate"
    },
    {
      imgSrc: nptel,
      imgAlt: "Nptel",
      link: "https://drive.google.com/file/d/1SL9atfPzx7y9bqifTpUFeRShxgD8BKQu/view?usp=sharing",
      name: "Internship",
      course: "Internship in Java"
    },
    {
      imgSrc: udemy,
      imgAlt: "udemy_certificate",
      link: "https://www.udemy.com/certificate/UC-307b8bd5-3ee2-48e2-9bbc-3fb9145de726/",
      name: "Udemy",
      course: "HTML5"
    },
    {
      imgSrc: nptel,
      imgAlt: "Nptel",
      link: "https://drive.google.com/file/d/1yec0sQNF9HYJurUPFTodKOLe0qxTRznw/view?usp=sharing",
      name: "Swayam Nptel",
      course: "Joy of Computing Using Python"
    },
    {
      imgSrc: udemy,
      imgAlt: "udemy_certificate",
      link: "https://www.udemy.com/certificate/UC-b087ae7a-1648-4c30-a386-3d65d8d3e79e/",
      name: "Udemy",
      course: "Machine Learning"
    },
    {
      imgSrc: letsupgrade,
      imgAlt: "letsupgrade",
      link: "https://drive.google.com/file/d/1QH0_j6EV8xLCBhiOxEhRht9hRkr6HSsW/view?usp=share_link",
      name: "LetsUpgrade",
      course: "Javascript Essentials"
    },
    {
      imgSrc: apssdc,
      imgAlt: "apssdc",
      link: "https://drive.google.com/file/d/1CBf1yc586AoLYZoqJ81v4wU6mFhQUlvr/view?usp=share_link",
      name: "APSSDC",
      course: "AI Master class"
    },
    {
      imgSrc: hackerrank,
      imgAlt: "hackerrank",
      link: "https://www.hackerrank.com/certificates/b1baf73554bf",
      name: "HackerRank",
      course: "Problem Solving (Basic)"
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {certificates.map((cert, index) => (
        <Col xs={12} md={6} lg={4} key={index} style={{ marginBottom: "20px" }}>
          <Card className="certi-list">
            <Card.Img variant="top" src={cert.imgSrc} alt={cert.imgAlt} style={{ maxHeight: "120px", objectFit: "contain" }} />
            <Card.Body>
              <Card.Title>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="name">{cert.name}</a>
              </Card.Title>
              <Card.Text>{cert.course}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CertificationList;
