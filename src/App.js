import React from "react";
import "./App.css";
import ProgressBar from "react-bootstrap/ProgressBar";

function App() {
  const levels = { levelOne: 10, levelTwo: 20, levelThree: 30 };
  const xp = 0;
  const currentLevel = 0;
  const nextLevel = currentLevel + 1;
  const now = 50;
  const xpProgress = xp / nextLevel;

  return <ProgressBar className="xpBar" now={now} label={`${now}%`} />;
}

export default App;
