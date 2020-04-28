import React from 'react'
import { useDrop } from 'react-dnd'

import Square from './Square'
import Overlay from "./Overlay";
import { canMoveWidget, moveWidget } from '../services/Game'
import { ItemTypes } from '../modules/Constant'

function BoardSquare({ x, y, children }) {
    const black = (x + y) % 2 === 1;
    const id=0;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.WIDGET,
        canDrop: () => canMoveWidget(id, x, y),
        drop: () => moveWidget(id, x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    )
}

export default BoardSquare