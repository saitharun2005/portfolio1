import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Tharun </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am a Final Year Computer Science Engineering student , pursuing my bachelor's degree from 2022 to 2026 .
            <br />
            My current CGPA is 8.28 out of 10. I am primarily interested in Web Development, Programming with Java, Data Structures & Algorithms, and Python.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making memes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Tharun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
