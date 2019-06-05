import React, { Component } from "react";
import style from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { giveInfoAboutMe, logOutThunk } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { compose } from "redux";


class Header extends Component {

  componentDidMount() {
    this.props.giveInfo();


  }






  render() {

    let reditectObj = {
      pathname: "/",
      state: {
        from: this.props.location
      }
    };


    if (!this.props.isAuth) {

      return <Redirect to={reditectObj}/>;
    }

    return (
      <header>

        <div className={style.header_container}>
          {/*<a href="#" className={style.enter}>Войти</a>*/}

          <Link to="/content/profile"><img
            src="https://cs6.pikabu.ru/images/previews_comm/2015-08_2/1438951906382231414.png"
            className={`${style.header_logo} ${"wow bounceInRight"}`} alt="logo" data-wow-duration="4s"/></Link>


          <div className={style.logoutField}>{this.props.isAuth && <><p>Welcome,<span
            className={style.userData}>{this.props.userInfo.userName}</span></p>
            <p>your ID:<span className={style.userData}>{this.props.userInfo.userId}</span></p></>}
            <div className={`${style.enter} ${"wow hinge"}`} data-wow-duration="5s" data-wow-delay="2s">
              <FontAwesomeIcon icon="sign-in-alt"/>
              <button
                onClick={this.props.logOutUser}
                type="button">
                logOut
              </button>
            </div>
          </div>
        </div>

      </header>
    );
  }
}

let mapStateToProps = (state) => {
  return {

    userInfo: state.authPage.userInfo,
    isAuth: state.authPage.isAuth
  };

};


const mapDispatchToProps = (dispatch) => {
  return {
    giveInfo: () => dispatch(giveInfoAboutMe()),
    logOutUser:
      () => dispatch(logOutThunk())

  }
};


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);
