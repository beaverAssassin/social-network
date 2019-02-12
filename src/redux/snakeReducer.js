const SET_DIRECTION = 'SNAKE/SET_DIRECTION';
const SET_SNAKE_POSITION = 'SNAKE/SET_SNAKE_POSITION';

export const Directions = {
    right: 'right',
    left: 'left',
    down: 'down',
    up: 'up'
}


const initialStateForSnakeComponent = {

    areaWidth: 500,
    areaHeight: 500,
    snakeSize: 20,
    direction: Directions.right,
    snakePosition: {x: 20, y: 150}

}


const snakePageReducer = (state = initialStateForSnakeComponent, action) => {
    let stateCopy
    switch (action.type) {
        case SET_DIRECTION:
            stateCopy = {...state};
            stateCopy.direction = action.direction;
            return stateCopy;
        case SET_SNAKE_POSITION:
            stateCopy = {...state};
            stateCopy.snakePosition = {
                x: action.x,
                y: action.y
            };
            return stateCopy;
        default:
            return state;
    }

}

let interval;
export const startSnake = () => {

    return (dispatch, getState) => {
clearInterval(interval);
        interval = setInterval(
            () => {
                let state = getState().snakePage;
                let x = state.snakePosition.x;
                let y = state.snakePosition.y;

                switch (state.direction) {
                    case Directions.right:
                        if(x<state.areaHeight -state.snakeSize)
                        x++;
                        break;
                    case Directions.left:
                        if(x>0)
                        x--;
                        break;
                    case Directions.up:

                        if(y>0)
                          y--;
                        break;
                    case Directions.down:
                        if(y<state.areaHeight -state.snakeSize)
                            y++;
                        break;
                }

                dispatch(setSnakePosition(x, y));
            }, 20)

    }

}

const setSnakePosition = (x, y) => ({type: SET_SNAKE_POSITION, x, y})
export const setDirection = (direction) => ({type: SET_DIRECTION, direction})


export default snakePageReducer;














