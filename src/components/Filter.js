import React from 'react';
import { Col, Button } from "react-bootstrap";

const Filter = ({filter}) => {
    return (
        <Col md={12}>
          <Button variant="dark" className="mr-2 rounded-pill shadow" onClick={() => filter("ALL")}>#All</Button>
          <Button variant="dark" className="mr-2 rounded-pill shadow" onClick={() => filter("WEB")}>#Web</Button>
          <Button variant="dark" className="mr-2 rounded-pill shadow" onClick={() => filter("MOBILE")}>#Mobile</Button>
        </Col>
    )
}

export default Filter
