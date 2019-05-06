import React, { Component } from 'react';
import './PlayerPool.css';

class PlayerPool extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return(
        <div className="PlayerPool">
          <p> This is where the player pool goes</p>
        </div>
    );
  }
}
export default PlayerPool;
