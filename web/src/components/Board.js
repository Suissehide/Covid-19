import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import BoardSquare from './BoardSquare'
import Widget from './Widget'

function renderPiece(x, y, [widgetX, widgetY]) {
    if (x === widgetX && y === widgetY) {
        return <Widget />
    }
}

function renderSquare(i, widgetPosition) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, widgetPosition)}
            </BoardSquare>
        </div>
    );
}

export default function Board({ widgetPosition }) {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, widgetPosition))
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