import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Jenny from "../../images/jenny.png";
import YellowBomb from "../../images/yellow_bomb.png";

function Tooltips() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">CodeXplode Instructions</Popover.Title>
      <Popover.Content>
        You're about to learn how to code!! And with <strong>BOMBS</strong>!{" "}
        <br></br>
        <img src={YellowBomb} alt="crazybombs" width="96" height="96"></img>
        <br></br>
        <br></br>
        Simply drag and drop the bombs into the correct positions to review an{" "}
        <strong>EXPLOSIVE</strong> result!
        <br></br>
        <br></br>
        As you complete the task <strong>Jenny</strong> the bomb expert will
        lead you through to the next challenge.
        <br></br>
        <img
          src={Jenny}
          alt="Jenny the bomb expert"
          width="96"
          height="96"
        ></img>
      </Popover.Content>
    </Popover>
  );

  const Tooltip = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">How to play</Button>
    </OverlayTrigger>
  );

  return (
    <div>
      <Tooltip />
    </div>
  );
}

export default Tooltips;
