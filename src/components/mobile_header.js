import React from "react";
import logo from "../images/logo_word.png"
export default class MobileHeader extends React.Component{
  render(){
    return(
      <div id="mobileHeader">
        <header>
          <img src={logo} alt="logoMobile"/>
          <span>ReactNews</span>
        </header>
      </div>
    )
  }
}
