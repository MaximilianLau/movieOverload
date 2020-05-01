import React, { Component } from 'react';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import Search from './Components/Search/Search.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Search />

        <Footer />
      </div>
    )
  }
}

export default App;