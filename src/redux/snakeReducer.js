const SET_DIRECTION = 'SNAKE/SET_DIRECTION';
const SET_SNAKE_POSITION = 'SNAKE/SET_SNAKE_POSITION';

const Directions= {
    right: 'right',
    left: 'left',
    down: 'down',
    up: 'up'
}


const initialStateForSnakeComponent ={

    areaWidth:500,
    areaHeight:200,
    snakeSize:20,
    direction:Directions.right,
    snakePosition:{x:130, y:150}

}



 const snakePageReducer =(state=initialStateForSnakeComponent ,action)=> {
    let stateCopy
    switch (action.type)
    {
        case SET_DIRECTION:
            stateCopy = {...state};
            stateCopy.direction = action.action;
            return stateCopy;
        case SET_SNAKE_POSITION:
            stateCopy = {...state};
            stateCopy.snakePosition ={
                x:action.x,
                y:action.y
            };
            return stateCopy;
        default:
            return state;
    }

}

export default snakePageReducer;