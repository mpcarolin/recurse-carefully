import React, { Component } from 'react';
import './Home.css';

class App extends Component {
  render() {
    return (
      <div className="home">
      	<span className='prompt'>
      		$ <input className='input-prompt'/>
  		</span>
      </div>
    );
  }
}

export default App;
