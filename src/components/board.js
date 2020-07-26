import React from "react";

function Board(props) {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    if (e.target.className === "puzzle-container" && e.target.children.length === 0) {
      e.target.appendChild(card);
    } else if (e.target.className === "board") {
      e.target.appendChild(card);
    }
    if (e.target.id.split("-")[1] === card.id.split("-")[1]) {
      props.incrementSuccess()
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Board;
