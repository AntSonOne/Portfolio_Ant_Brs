import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiCss3,
  DiSass,
  DiRuby,
  DiRor,
  DiGit,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiHtml5,
  SiMongodb
} from "react-icons/si";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger overlay={ <Tooltip>HTML 5</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5/>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>CSS 3</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>Sass</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <DiSass />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>JavaScript</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>NodeJS</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>ReactJS</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>MongoDB</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>Git</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>     
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>Ruby</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <DiRuby />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>Rails</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <DiRor />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
