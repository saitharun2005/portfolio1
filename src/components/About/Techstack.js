import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5, DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,SiMysql, SiSqlite
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
  <DiJava />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiPython />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiJavascript1 />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiHtml5 />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiCss3 />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiMongodb />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiMysql />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiSqlite />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiReact />
</Col>
    </Row>
  );
}

export default Techstack;
