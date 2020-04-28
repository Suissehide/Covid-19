let widgetPosition = [
    {id: 0, x: 0, y: 0},
    {id: 9, x: 3, y: 3}
];

let observer = null;

function emitChange() {
    observer(widgetPosition)
}

// export function observe(receive) {
//     const randPos = () => Math.floor(Math.random() * 8)
//     setInterval(() => receive([randPos(), randPos()]), 500)
// }

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.')
    }

    observer = o;
    emitChange()
}

export function moveWidget(id, toX, toY) {
    console.log(id, toX, toY);
    widgetPosition.map((item) => {
        console.log(item.id, id, item.id === id);
        if (item.id === id) {
            item.x = toX;
            item.y = toY;
        }
    });
    // widgetPosition = [toX, toY];
    emitChange()
}

export function canMoveWidget(id, toX, toY) {
    // const [x, y] = widgetPosition;
    // const dx = toX - x;
    // const dy = toY - y;
    //
    // return (
    //     (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    //     (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    // )
    return (true)
}