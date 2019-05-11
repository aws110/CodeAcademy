import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  constructor(props, id, position, name, avg, salary, team, opponent, injury){
    super(props);
    position = position.slice(1,-1);
    name = name.slice(1,-1);
    avg = avg.slice(1,-1);
    salary = salary.slice(1,-1);
    team = team.slice(1,-1);
    opponent = opponent.slice(1,-1);
    injury = injury.slice(1,-1);

    this.state = {
      id : id,
      position : position,
      name : name,
      average : parseFloat(avg),
      salary : parseInt(salary),
      team : team,
      opponent : opponent,
      injury : injury
    };
  }

  getState(){
    return this.state;
  }

  render(){
    return (
      <div className="Player">
        <p>  </p>
      </div>
    )
  }
}
export default Player;
