import React, { Component } from 'react';
import './Home.css';


const navItems = pages.map(page => <a >{page}</a>)


class App extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
        </header>
      </div>
    );
  }
}

export default App;
