import React from 'react';
import styles from './snake.module.css';


const Snake = (props)=>{
    return(
        <div className ={styles.gameArea}>
<div className={styles.snake}></div>
        </div>
    )
}

export default Snake;