import React, { Component } from 'react';
import logo from './assets/logo.png'

class Header extends Component {
  render() {
    return (
      <header className="wrapper">
        <img src={logo} alt="logo of the website Overload"></img>
        <h1><span>m</span>OV<span>i</span>ERLOAD</h1>
        <p>movie rating aggregator</p>
      </header>
    )
  }
}

export default Header;
