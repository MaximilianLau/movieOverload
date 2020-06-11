import React, { Component } from 'react';
import logoTop from '../../assets/logoTop.png'
import logoBottom from '../../assets/logoBottom.png'

class Header extends Component {
  render() {
    return (
      <header className="wrapper">
        <div id="top" className="headerLogo">
        <img src={logoTop} className="diyLogoTop" alt="top half logo, Overload"></img>
        <img src={logoBottom} alt="bottom half of the logo, Overload"></img>
        </div>
        <h1 className="headerGlow" tabIndex="0"><span>m</span>OV<span>i</span>ERLOAD</h1>
        <p>movie rating aggregator</p>
      </header>
    )
  }
}

export default Header;
