import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiGithub,
  SiNotion
} from "react-icons/si";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger overlay={ <Tooltip>VSCode</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>Postman</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>Github</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>Notion</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiNotion />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger overlay={ <Tooltip>Heroku</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
