import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Square from './Square'
import Knight from './widgets/Test'
import { canMoveKnight, moveKnight } from '../services/Game'

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isKnightHere = x === knightX && y === knightY;
    const black = (x + y) % 2 === 1;
    const piece = isKnightHere ? <Knight /> : null;

    return (
        <div onClick={() => handleSquareClick(x, y)} style={{ width: '12.5%', height: '12.5%' }} key={i}>
                <Square black={black}>{piece}</Square>
        </div>
    );

    function handleSquareClick(toX, toY) {
        if (canMoveKnight(toX, toY)) {
            moveKnight(toX, toY)
        }
    }
}

export default function Board({ knightPosition }) {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <DndProvider backend={Backend}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {squares}
            </div>
        </DndProvider>
    )
}