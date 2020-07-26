import React, { useState, useEffect } from "react";
import CodeArrays from "./CodeArrays";
import "./main.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import BlockBomb from "./BlockBomb";
import Board from "./components/board";
import YellowBomb from "./images/yellow_bomb.png";
import PinkBomb from "./images/pink_bomb.png";
import BlueBomb from "./images/blue_bomb.png";
import PurpBomb from "./images/purp_bomb.png";
import GreenBomb from "./images/green_bomb.png";
import PuzzleContainer from "./components/puzzleContainer";
import Crazybombs from "./images/crazybombs.png";
// import Tooltips from "./components/tooltips/tooltips";
// import TooltipsBombs from "./components/tooltipsbombs/tooltipsBombs";

function App() {
  const [lesson, setLesson] = useState(1)
  const [blocks, setBlocks] = useState([])
  const [bombs, setBombs] = useState([YellowBomb, PinkBomb, BlueBomb, PurpBomb, GreenBomb])
  const [colors, setColors] = useState([])
  const [xp, setXp] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [xpProgress, setXpProgress] = useState(0);
  const [numberCorrect, setNumberCorrect] = useState(0)
  
  const makeBlocks = arr => {
    let tempBlocks = []
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        tempBlocks.push({id: arr.indexOf(arr[i]), description: arr[i]})
      } else {
        tempBlocks.push({id: i+1, description: arr[i]})
      }
    }
    setBlocks(tempBlocks)
  }

  const levels = { "1": 10, "2": 20, "3": 30, "4": 40, "5": 50 };

  const gainXp = () => {
    const newXp = xp + 5;
    setXp(newXp);
  };

  const levelUp = () => {
    setCurrentLevel(currentLevel + 1);
    setXpProgress(0);
    setXp(0);
  };

  useEffect(() => {
    if (xpProgress * 100 == 100) {
      levelUp();
    }
  }, [xpProgress])

  useEffect(() => {
    setXpProgress(xp / levels[`${currentLevel + 1}`]);
  }, [xp]);

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

  const lessonCompletion = (e) => {
    if (numberCorrect >= blocks.length) {
      gainXp();
      nextLesson(e);
    } else {
      window.alert("There's still one or two out of place. Give it another try!")
    }
  };


  const incrementSuccess = () => {
    const stateToChange = numberCorrect + 1
    setNumberCorrect(stateToChange)
  }

  const randomizeBombColors = () => {
    let shuffled = bombs;
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setBombs(shuffled);
    setColors(shuffled.map(bomb => {
      if (bomb.toString().includes("blue")) {
        return "#0E4EAD"
      } else if (bomb.toString().includes("green")) {
        return "#0EAD69"
      } else if (bomb.toString().includes("purp")) {
        return "#540D6E"
      } else if (bomb.toString().includes("pink")) {
        return "#EE4266"
      } else if (bomb.toString().includes("yellow")) {
        return "#FFD23F"
      }
    }))
  };

  useEffect(() => {
    if (lesson > CodeArrays.length) {
      noMoreLessonsAlert()
    } else {
      makeBlocks(CodeArrays[lesson - 1])
      randomizeBombColors()
    }
  }, [lesson]);

  return (
    <Container>
      <main className="flexbox">
        <div className="mainHeaderbar">
          <img
            src={Crazybombs}
            alt="crazybombs"
            width="96"
            height="96"
          ></img>
          &nbsp
          <h2 className="pageName">CodeXplode</h2>
        </div>
        {/* <Tooltips /> */}
        <ProgressBar
          now={xpProgress * 100}
          label={`${Math.floor(xpProgress * 100)}%`}
        />
        <Row className="site-main">
          <Col sm={8} className="game-puzzle">
            {blocks.length > 0 ? (
              <Board className="puzzle-board"  incrementSuccess={incrementSuccess} >
                {blocks[0].description == "if" ? (
                  <Row md={2}>
                    {blocks.map(block => (
                      <PuzzleContainer key={block.id * 2} id={`puzzle-${block.id}`} color={colors[block.id - 1]} />
                    ))}
                  </Row>
                ) : null}
                {blocks[0].description == "for" ? (
                  <Row md={4}>
                    {blocks.map(block => (
                      <PuzzleContainer key={block.id * 3} id={`puzzle-${block.id}`} color={colors[block.id - 1]} />
                    ))}
                  </Row>
                ) : null}
                {blocks[0].description == "while" ? (
                  <Row md={2}>
                    {blocks.map(block => (
                      <PuzzleContainer key={block.id * 4} id={`puzzle-${block.id}`} color={colors[block.id - 1]} />
                    ))}
                  </Row>
                ) : null}
                {blocks[0].description == "this" ? (
                  <Row md={3}>
                    {blocks.map(block => (
                      <PuzzleContainer key={block.id * 5} id={`puzzle-${block.id}`} color={colors[block.id - 1]} />
                    ))}
                  </Row>
                ) : null}
              </Board>
            ) : (
              <Board className="puzzle-board" />
            )}
          </Col>
          <Col className="game-pieces">
            <Board className="board" >
              {/* <TooltipsBombs /> */}
                {blocks.map((block) => (
                  <BlockBomb
                    key={block.id * 6}
                    block={block}
                    bomb={
                      block.id <= bombs.length
                        ? bombs[block.id - 1]
                        : bombs[block.id - bombs.length]
                    }
                  />
                ))}
            </Board>
          </Col>
        </Row>
        <Button onClick={(e) => lessonCompletion(e)}>
          Check Mission
        </Button>
      </main>
    </Container>
  );
}

export default App;
