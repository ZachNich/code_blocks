import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      <Row className="site-header">
        <Col>First Row</Col>
      </Row>
      <Row className="site-main">
        <Col sm={8} className="game-puzzle">
          Second Row, First Column
        </Col>
        <Col className="game-pieces">Second Row, Second Column</Col>
      </Row>
    </Container>
  );
}

export default App;
