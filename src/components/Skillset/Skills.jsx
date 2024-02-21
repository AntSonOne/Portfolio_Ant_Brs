import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";

const Skills = () => {
    return (
          <Container>
            <Row>
                <h1 className="project-heading">
                    Mes <strong className="yellow">compétences</strong> 
                </h1>
                <p className="home-about-body">
                    Durant mon alternance avec <b className="yellow">Openclassrooms </b>
                    j'ai développé divers <b className="yellow"> compétences : </b>
                    <br />
                    - intégration de <b className="yellow">maquettes Figma responsives</b> et animées
                    <br />
                    - organisation et <b className="yellow">gestion de projet</b> des spécifications techniques à la planification via <b className="yellow">Notion</b> et en respectant la  <b className="yellow">méthode Agile</b>
                    <br />
                    - résolution de bugs et optimisation du <b className="yellow">référencement SEO</b> d'un site
                    <br />
                    - gestion de problématiques liées au <b className="yellow">routing</b> d'une application React
                    <br />
                    - utilisation de <b className="yellow">hooks personnalisés</b>
                    <br />
                    - implémentation d'un <b className="yellow">modèle de données</b> suivant les contraintes techniques du projet 
                    <br />
                    - gestion d'une base de donnée de manière <b className="yellow">sécurisée</b>
                    <br />
                    - <b className="yellow">authentification d'utilisateurs</b> et restriction d'accès à la donnée avec <b className="yellow">JWT</b> et les <b className="yellow">middlewares</b>
                    <br />
                    - déploiement d'un site en production via la solution <b className="yellow">Github pages</b>
                </p>
            </Row>
          </Container>
      );
    
}

export default Skills