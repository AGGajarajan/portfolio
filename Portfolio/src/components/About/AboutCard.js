import React from "react";
import Card from "react-bootstrap/Card";
// import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify", padding:"10px", fontSize:"18px"}}>
            I'm <span className="secondary-header">A G Gajarajan. </span>{" "}
            I have completed my Bachelors at Sri Venkatesa Perumal of Engineering and Technology in the ECE(Electronics and Communicaion Engineering). 
            <br />
            As a highly skilled and passionate developer, I am eager to apply my skills and knowledge 
            in the field of web and full stack software development.
          </p>
          {/* <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Writing Tech Blogs
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
