import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import ava from "../assets/images/afif.webp";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Card className="shadow p-3 rounded">
      <Card.Body>
        <Row>
          <Col md={6}>
            <Fade bottom delay={500}>
              <img
                src={ava}
                alt="Afif"
                width="250"
                className="img-responsive mx-auto d-block"
              />
            </Fade>
          </Col>
          <Col md={6} className="mt-5">
            <Row>
              <Col md={12}>
                <Fade bottom delay={500}>
                  <h5 className="text-muted">Hello I'am</h5>
                  <h2>
                    Muhammad <strong>Afifuddin</strong> S.Kom
                  </h2>
                  <h5 className="text-muted">Full Stack Developer </h5>
                </Fade>
              </Col>
              <Fade bottom delay={1000}>
                <Col md={12} className="mt-3">
                  <a href="https://www.instagram.com/afifbasya/" className="text-dark mr-2">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a href="https://www.github.com/afifbasya/" className="text-dark mr-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a href="https://twitter.com/afif_basya" className="text-dark mr-2">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="https://web.facebook.com/afifuddin.basyaeban" className="text-dark mr-2">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="mail:afifbasya@gmail.com" className="text-dark mr-2">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                </Col>
                <Col md={12} className="mt-4">
                  <p>
                    Profesional Full Stack Developer from Pekalongan, Indonesia
                  </p>
                  <a href="https://drive.google.com/open?id=1XoH64b-NG94qI8RWswK9aHyY-_8bKs_U" className="btn btn-dark shadow">
                    <FontAwesomeIcon icon={faDownload} /> Download CV
                  </a>
                </Col>
              </Fade>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Header;
