import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../components/Particle";
import ProjectCard from "../components/Projects/ProjectCard";
import projects from "../data/projects.json";
import kasa from "../assets/projects/kasa.png"
import grimoire from "../assets/projects/grimoire.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="yellow">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {projects.map((project) => ( 
          <Col md={4} className="project-card" key={Math.random()}>
            <ProjectCard
              imgPath={project.id === 1 ? kasa : grimoire}
              isBlog={project.isBlog}
              title={project.title}
              description={project.description}     
              skills={project.skills}         
              ghLink={project.ghLink}/> 
          </Col>))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects