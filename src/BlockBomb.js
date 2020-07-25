import React from 'react';

const BlockBomb = props => {
    return (
        <div className="block-bomb" id={`bomb-${props.block.id}`}>
            <p className="bomb-text">{props.block.description}</p>
        </div>
    )
}

export default BlockBomb