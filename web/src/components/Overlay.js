import React from 'react'

export default function Overlay({color}) {
    return (
        <div
            className="overlay"
            style={{
                backgroundColor: color,
            }}
        />
    )
}