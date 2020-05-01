import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="wrapper">
            <p>Copyright &copy; 2020 <a href="http://maximilianlau.com" target="_blank" rel="noopener noreferrer">Maximilian Lau.</a></p>
            <p>Powered by React, The Movies DB, and OMDB</p>
        </footer>
    )
  }
}

export default Footer;