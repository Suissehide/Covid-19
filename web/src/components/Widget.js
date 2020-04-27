import React from 'react'
import { ItemTypes } from '../modules/Constant'
import { useDrag } from 'react-dnd'

export default function Widget({children}) {
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.WIDGET },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
            }}
            className="widget">
            <div className="widget__inner">
                <div className="widget__header">
                    <div className="widget__title">Widget</div>
                    <div className="widget__btn-bar">
                        <button>✖</button>
                    </div>
                </div>
                <div className="widget__content">
                    {children}
                </div>
            </div>
        </div>
    )
}