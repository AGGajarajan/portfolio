import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiGithub,
  // SiPeakdesign,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftword />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPeakdesign />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
