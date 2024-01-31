import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import LaptopImg from "../../assets/home-main.svg";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  À propos <span className="yellow"> de moi </span> 
                </h1>
                <p className="home-about-body">
                 Bonjour, je m'appelle <b className="yellow">Antoine Berson, </b>
                 j'ai 26 ans <b className="yellow"> et je vis à Bordeaux.</b>
                <br />
                <br />
                J'ai récemment achevé ma formation de <b className="yellow">développeur web</b> en alternance avec <b className="yellow"> OpenClassrooms.</b>
                <br />
                <br />
                  En tant que 
                  <b className="yellow"> développeur web fullstack </b>,  
                  j'aime approfondir mes connaissances au travers de projets enthousiasmants.
                  <br />
                  <br />J'utilise plusieurs langages dans mes projets comme
                    <b className="yellow"> Javascript </b>
                    ou 
                  <b className="yellow"> Ruby </b>
                    par exemple.
                  <br />
                  <br />
                    J'ai eu l'occasion de travailler avec <b className="yellow">Node.js, MongoDB,</b> et
                    <b className="yellow">
                      {" "}
                      des librairies frontend 
                    </b>
                  &nbsp; comme
                    <b className="yellow"> React </b>
                  durant ma formation.
                  <br />
                  <br />
                  Je suis intéressé par d'autres domaines tels que 
                    <b className="yellow"> l'intelligence artificielle </b>
                    et
                    <b className="yellow"> la cybersécurité.</b>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About