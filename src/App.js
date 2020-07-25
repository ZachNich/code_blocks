import React, { useState, useEffect } from 'react';
import CodeArrays from './CodeArrays';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlockBomb from './BlockBomb';


function App() {
  const [lesson, setLesson] = useState(1)
  const [blocks, setBlocks] = useState([])
  
  const makeBlocks = arr => {
    let tempBlocks = [] 
    for (let i = 0; i < arr.length; i++) {
      tempBlocks.push({id: i, description: arr[i]})
    }
    setBlocks(tempBlocks)
  }
  
  const nextLesson = e => {
    const stateToChange = lesson + 1
    setLesson(stateToChange)
  }
  
  useEffect(() => {
    makeBlocks(CodeArrays[lesson - 1])
  }, [lesson])

  return (
    <Container>
      <Row className="site-header">
        <Col>
          First Row
        </Col>
      </Row>
      <Row className="site-main">
        <Col sm={8} className="game-puzzle">
          {blocks.map(block => <BlockBomb block={block} />)}
        </Col>
        <Col className="game-pieces">
          Second Row, Second Column
        </Col>
      </Row>
      <Button onClick={nextLesson} />
    </Container>
  );
}

export default App;