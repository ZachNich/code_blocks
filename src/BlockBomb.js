import React from 'react';

const BlockBomb = props => {
    const dragStart = e => {
        e.dataTransfer.setData("card_id", e.target.id);
      };
    
    const dragOver = e => {
        e.stopPropagation();
    };
    
    return (
        <div className="block-bomb" id={`bomb-${props.block.id}`} draggable="true" onDragStart={dragStart} onDragOver={dragOver}>
            <img
                src={props.bomb}
                width="110"
                height="80"
                draggable="false"
            />
            <p className="bomb-text">{props.block.description}</p>
        </div>
    )
}

export default BlockBomb