import React, { Component } from "react";
import Portfolio from "./Portfolio";
import FilterLink from "../containers/FilterLink";
import { Row, Col } from "react-bootstrap";
import { setHover } from "../actions";

import TransitionGroup from "react-transition-group/TransitionGroup";

export default class Portfolios extends Component {
  render() {
    const { portfolios, dispatch } = this.props;

    return (
      <Row className="mt-5">
        <Col md={12}>
          <h2 align="center">
            My <strong>Portfolio's</strong>
          </h2>
        </Col>
        <FilterLink></FilterLink>
        <Col md={12} className="mt-5">
          <TransitionGroup appear={true} exit={true}>
            <Row>
              {portfolios.map(function(portfolio) {
                return (
                  <Portfolio
                    key={portfolio.id}
                    {...portfolio}
                    onMouseEnter={() => dispatch(setHover(portfolio.id, true))}
                    onMouseLeave={() => dispatch(setHover(portfolio.id, false))}
                  />
                );
              })}
            </Row>
          </TransitionGroup>
        </Col>
      </Row>
    );
  }
}
