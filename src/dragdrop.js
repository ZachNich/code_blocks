import React from "react";
import Board from "./components/board";
import Card from "./components/card";
import ImageCard from "./components/imageCard";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";
import Yellowbomb from "./images/yellowbomb.png";

function DragDrop() {
  return (
    <div className="">
      <main className="flexbox">
        <Container>
          <Row className="site-header">
            <Col>First Row</Col>
          </Row>
          <Row className="site-main">
            <Col sm={8} className="game-puzzle">
              <Board id="board-1" className="board"></Board>
            </Col>
            <Col className="game-pieces">
              <Board id="board-2" className="board">
                <Card id="card-1" className="card" draggable="true">
                  <p>Another Option</p>
                </Card>
                <ImageCard
                  id="card-4"
                  className="card noborder fitcontent"
                  draggable="true"
                >
                  <img
                    src={Yellowbomb}
                    alt="yellowbomb"
                    width="120"
                    height="96"
                    draggable="false"
                  />
                </ImageCard>

                <Card id="card-2" className="card" draggable="true">
                  <p>"else"</p>
                </Card>
                <Card id="card-3" className="card" draggable="true">
                  <p>return()</p>
                </Card>
              </Board>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default DragDrop;
