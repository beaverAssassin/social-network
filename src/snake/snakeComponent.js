import React from 'react';
import styles from './snake.module.css';
import {connect} from "react-redux";


const Snake = (props)=>{
    return(
        <div className ={styles.gameArea}>
<div className={styles.snake} style={{
    left: props.state.snakePosition.x + 'px',
    top: props.state.snakePosition.y + 'px'

}}></div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    state: state.snakePage

})

const mapDispatchToProps =(dispatch)=>{


}

export default connect(mapStateToProps,mapDispatchToProps) (Snake);