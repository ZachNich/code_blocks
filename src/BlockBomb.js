import React from 'react';
import './BlockBomb.css';

const BlockBomb = props => {

    const dragStart = e => {
        e.dataTransfer.setData("card_id", e.target.id);

        // setTimeout(() => {
        //     e.target.style.display = "none";
        // }, 0);

    };
    
    const dragOver = e => {
        e.stopPropagation();
    };
    

    return (
        <div className="block-bomb" id={`bomb-${props.block.id}`} draggable="true" onDragStart={dragStart} onDragOver={dragOver}>
            <img
                src={props.bomb}
                width="145"
                height="110"
                draggable="false"
            />
            <div className="bomb-text">{props.block.description}</div>
        </div>
    )
}

export default BlockBomb