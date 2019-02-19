import React, {Component} from 'react';
import style from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Footer extends Component{

render(){

    return(


    <footer>
        <div className={style.footerContainer}>
          
            <div className ={style.socialIcons}><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" spin />
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" pulse  />
            <FontAwesomeIcon icon={['fab', 'vk']}  mask={['far', 'circle']}/>
            <FontAwesomeIcon size="2x" icon="sign-in-alt" color="green"/></div>
            <p>&copy;2019. All Rights Reserved</p>
        </div>
    </footer>





    )



}



}


export default Footer;