
// This should only compile with tsc (it requires special plugins for babel).
const enum Direction {
    Left,
    Right,
    Top,
    Down
}

const message: number = "Hello world!"; // This is a type error!
console.log(Direction.Left);