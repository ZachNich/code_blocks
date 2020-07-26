import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Jenny from "../../images/jenny.png";
import YellowBomb from "../../images/yellow_bomb.png";

function TooltipsBombs() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">How to use your Ammo</Popover.Title>
      <Popover.Content>
        On the left you will see boxes with matching colors to the bombs in your
        Ammo. To solve this mission you will need to match the bomb colors to
        the same color blocks.
        <br></br>
        <br></br>
        As you work keep an eye on the words in the bombs. These words are
        special keywords that make this mission work. When put in the correct
        order the "code" and mission with execute with a <strong>BANG</strong>!
      </Popover.Content>
    </Popover>
  );

  const Tooltip = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Your Ammo</Button>
    </OverlayTrigger>
  );

  return (
    <div>
      <Tooltip />
    </div>
  );
}

export default TooltipsBombs;
