import React from "react";
import "./maincharacter.css";

function Maincharacter() {
  const myMove = () => {
    let tID; //we will use this variable to clear the setInterval()
    function stopAnimate() {
      clearInterval(tID);
    } //end of stopAnimate()
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame() {
      if (pos === 1000) {
        clearInterval(id);
        stopAnimate();
      } else {
        pos++;
        // elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
    let position = 256; //start position for the image slicer
    const interval = 100; //100 ms of interval for the setInterval()
    const diff = 256; //diff as a variable for position offset
    tID = setInterval(() => {
      document.getElementById(
        "image"
      ).style.backgroundPosition = `-${position}px 0px`;
      //we use the ES6 template literal to insert the variable "position"
      if (position < 1536) {
        position = position + diff;
      }
      //we increment the position by 256 each time
      else {
        position = 256;
      }
      //reset the position to 256px, once position exceeds 1536px
    }, interval); //end of setInterval
  }; //end of animateScript()

  return (
    <div>
      <p>
        <button onClick={myMove}>Move</button>
      </p>
      <div id="container">
        <div id="animate">
          <div id="demo">
            <p id="image"></p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Maincharacter;
