import React from 'react'

export default function Square({ black, children }) {
    // const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    const fill = '#FAF9F9';

    return (
        <div
            style={{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%',
            }}
        >
            {children}
        </div>
    )
}