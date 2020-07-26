import React, { useState, useEffect } from "react";
import CodeArrays from "./CodeArrays";
import "./main.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlockBomb from "./BlockBomb";
import Board from "./components/board";
import YellowBomb from "./images/yellow_bomb.png";
import PinkBomb from "./images/pink_bomb.png";
import BlueBomb from "./images/blue_bomb.png";
import PurpBomb from "./images/purp_bomb.png";
import GreenBomb from "./images/green_bomb.png";

// import Background from "./images/horror1.png";

function App() {
  const [lesson, setLesson] = useState(1);
  const [blocks, setBlocks] = useState([]);
  const [bombs, setBombs] = useState([
    YellowBomb,
    PinkBomb,
    BlueBomb,
    PurpBomb,
    GreenBomb,
  ]);

  const makeBlocks = (arr) => {
    let tempBlocks = [];
    for (let i = 0; i < arr.length; i++) {
      tempBlocks.push({ id: i + 1, description: arr[i] });
    }
    setBlocks(tempBlocks);
  };

  const noMoreLessonsAlert = () => {
    window.alert(
      "You've finished all your lessons! You're ready to move on to becoming a master programmer. Thanks for trying out Code Explode!"
    );
    setLesson(1);
  };

  const nextLesson = (e) => {
    const stateToChange = lesson + 1;
    setLesson(stateToChange);
  };

  const randomizeBombColors = () => {
    let shuffled = bombs;
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setBombs(shuffled);
  };

  useEffect(() => {
    if (lesson > CodeArrays.length) {
      noMoreLessonsAlert();
    } else {
      makeBlocks(CodeArrays[lesson - 1]);
    }
  }, [lesson]);

  useEffect(() => {
    randomizeBombColors();
  }, []);

  return (
    <Container>
      <main className="flexbox">
        <Row className="site-header">
          <Col>CodeXplode</Col>
        </Row>
        <Row className="site-main">
          <Col sm={8} className="game-puzzle">
            <Board className="board"></Board>
          </Col>
          <Col className="game-pieces">
            <Board className="board">
              {blocks.map((block) => (
                <BlockBomb
                  block={block}
                  bomb={
                    block.id < bombs.length
                      ? bombs[block.id]
                      : bombs[block.id - bombs.length]
                  }
                />
              ))}
            </Board>
          </Col>
        </Row>
        <Button onClick={nextLesson} />
      </main>
    </Container>
  );
}

export default App;
