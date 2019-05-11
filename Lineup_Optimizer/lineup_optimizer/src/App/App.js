import React, { Component } from 'react';
import './App.css';
import PlayerPool from '../Components/PlayerPool/PlayerPool';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <PlayerPool/>
        </header>
      </div>
    );
  }
}

export default App;
