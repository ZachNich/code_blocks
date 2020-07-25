import React from "react";
import ReactDOM from "react-dom";
import "./main.css";

// import App from "./App";
import DragDrop from "./dragdrop";
import Maincharacter from "./components/maincharacter/maincharacter";

ReactDOM.render(
  <React.StrictMode>
    <DragDrop />
    <Maincharacter />
  </React.StrictMode>,
  document.getElementById("root")
);
