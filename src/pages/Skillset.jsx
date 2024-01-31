import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="yellow">Stack </strong>technique
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Autres <strong className="yellow">outils</strong> 
        </h1>
        <Toolstack />

        {/* <Leetcode /> */}
        <Github />
      </Container>
    </Container>
  )
}

export default Skillset