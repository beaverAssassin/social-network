import React from 'react';
import styles from './snake.module.css';
import {connect} from "react-redux";
import {Directions, setDirection, startSnake} from "../redux/snakeReducer";


class Snake extends React.Component {

    constructor(props) {
        super(props);
        this.func = this.func.bind(this);
        alert('Object Snake is created')
this.globalKeyUpListener = this.globalKeyUpListener.bind(this);
        document.addEventListener('keyup',this.globalKeyUpListener);



    }

    detectDirection(letter){
        switch (letter) {
            case "R":
                return  Directions.right;

            case "L":
                 return  Directions.left;

            case "U":
                return  Directions.up;

            case "D":
                return  Directions.down;

        }
    }

    globalKeyUpListener(e) {
        let letter = '';

        switch (e.code) {
            case 'ArrowUp':
                alert("dfdfdf");
                letter = 'U';
                break;
            case 'ArrowDown':
                letter = 'D';
                break;
            case 'ArrowLeft':
                letter = 'L';
                break;
            case 'ArrowRight':
                letter = 'R';
                break;


        }

        let direction = this.detectDirection(letter);
        this.props.setDirection(direction);

    }

    func(e){

        let direction = this.detectDirection(e.currentTarget.innerHTML);
        this.props.setDirection(direction);



    }








    render() {



        return (
            <div>
                <button onClick={this.func}>L</button>
                <button onClick={this.func}>R</button>
                <button onClick={this.func}>D</button>
                <button onClick={this.func}>U</button>
                <button onClick={(e) => {
                    this.props.start()
                }}>Start
                </button>
                <div className={styles.gameArea}>
                    <div className={styles.snake} style={{
                        left: this.props.snakePosition.x + 'px',
                        top: this.props.snakePosition.y + 'px'

                    }}></div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    snakePosition: state.snakePage.snakePosition

})


const mapDispatchToProps = (dispatch) => ({

    start: () => {

        dispatch(startSnake())
    },

    setDirection: (direction) => {
        dispatch(setDirection(direction))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Snake);