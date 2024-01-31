import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kasa from "../assets/projects/kasa.png";
import grimoire from "../assets/projects/grimoire.png";
import Particle from "../components/Particle";
import ProjectCard from "../components/Projects/ProjectCard";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="Kasa App"
              description="Réalisation du frontend d'une application de location immobilière avec React et Sass. Gestion du routing et des props dans la logique du framework. Respect d'une architecture minimaliste avec notamment la génération de listes de manière dynamique et la création de composants adaptés."
              ghLink="https://github.com/AntSonOne/Kasa-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grimoire}
              isBlog={false}
              title="Mon Vieux Grimoire"
              description="Réalisation du backend d'une application de notation de livres avec NodeJS, Express et MongoDB. Résolution de problèmes complexes liés au fonctionnement d'un serveur. Respect des bonnes pratiques en matière de sécurité et de green IT."
              ghLink="https://github.com/AntSonOne/Book_rating"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects