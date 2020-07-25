// import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import DragDrop from "./dragdrop";
// import Maincharacter from "./components/maincharacter/maincharacter";
import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <DragDrop />
  </React.StrictMode>,
  document.getElementById("root")
);
