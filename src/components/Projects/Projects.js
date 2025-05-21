import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GIFTIT"
              description="A smart gifting recommendation application suggests personalized gift ideas by analyzing key factors like age, gender, occasion, and relationship. It uses intelligent algorithms to match preferences and contexts, helping users find thoughtful and suitable gifts quickly, making gifting easier, more meaningful, and tailored to every individual and celebration."
              ghLink="https://github.com/saitharun2005"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="College Magazine Application"
              description="A centralized college information portal built using Java provides login access for students, teachers, and guests. It streamlines core academic operations like admissions, fee payments, event tracking, and attendance management. The application ensures secure role-based access and offers an integrated platform for efficient and transparent college administration and communication."
              ghLink="https://github.com/saitharun2005"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Aiding Lifes"
              description="A social aid web platform built using the MERN stack (MongoDB, Express.js, React, Node.js) enables users to share personal problems and seek assistance. Donors can browse posts and offer help directly. The platform fosters community support, secure interactions, and meaningful connections between those in need and those willing to help."
              ghLink="https://github.com/saitharun2005"
              demoLink="/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gesture Music Player"
              description="A mobile music player app developed in Android Studio enables users to control playback through intuitive hand gestures like swiping to skip or rewind songs. Utilizing gesture recognition technology, the app offers a seamless, hands-free music experience, enhancing usability and making music control convenient and interactive on mobile devices."
              ghLink="https://github.com/saitharun2005"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mobile Usage Analytics Dashboard"
              description="An advanced analytics dashboard visualizes mobile usage trends across India using government data. It features interactive graphs with customizable options, machine learning predictions of user behavior and brand preferences, and intuitive visualizations that simplify complex data. This tool supports informed decision-making for businesses, researchers, and policymakers."
              ghLink="https://github.com/saitharun2005/govt-dataset-analysis.git"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="File Sharing App"
              description="A real-time file sharing web app enables seamless transfer of files between devices connected to the same Wi-Fi network using peer-to-peer technology. It offers fast, secure, and direct sharing without internet dependency, providing an easy-to-use interface for quick file exchange among nearby users with minimal setup and latency."
              ghLink="https://github.com/saitharun2005"
              demoLink="https://saitharun2005.github.io/app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
