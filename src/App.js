import React, { useState, useEffect } from "react";
import Board from "./components/board";
import Card from "./components/card";
import ImageCard from "./components/imageCard";
import "./App.css";
import "./main.css";
import Yellowbomb from "./images/yellowbomb.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

function App() {
  const [xp, setXp] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [xpProgress, setXpProgress] = useState(0);

  const levels = { "1": 10, "2": 20, "3": 30 };

  const gainXp = () => {
    const newXp = xp + 1;
    setXp(newXp);
  };

  const levelUp = () => {
    setCurrentLevel(currentLevel + 1);
    setXpProgress(0);
  };

  if (xpProgress * 100 == 100) {
    levelUp();
  }

  useEffect(() => {
    setXpProgress(xp / levels[`${currentLevel + 1}`]);
  }, [xp]);

  return (
    <div className="">
      <main className="flexbox">
        <Container>
          <Row className="site-header">
            <Col>First Row</Col>
          </Row>
          <ProgressBar
            now={xpProgress * 100}
            label={`${xpProgress * 100}%`}
          />
          <Button onClick={gainXp} />
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

export default App;
