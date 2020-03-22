import React from "react";
import { Col, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Portfolio = ({ name, description, images, onMouseEnter, onMouseLeave, active }) => (
  <Col md={4} className="mb-3">
    <Fade bottom>
      <Card className={active ? 'shadow p-3 border-dark  ' : 'shadow p-3'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a href={images} target="_blank" className="btn btn-dark shadow">
            Detail
          </a>
        </Card.Body>
      </Card>
    </Fade>
  </Col>
);

export default Portfolio;
