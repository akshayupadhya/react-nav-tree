import React from 'react'
import ReactDOM from 'react-dom'

function ShowPlayer(name,playerDetails) {

  const numOfBallsPerOver = 6.00
const HundredBalls = 100.00
  console.log(playerDetails)
  if (!playerDetails.batting) { playerDetails.batting = { balls: 0, runs: 0 } }
  if (!playerDetails.bowling) { playerDetails.bowling = { balls: 0, runs: 0 } }
  let findStrikeRate = (obj) => {
    let balls = obj.balls
    let runs = obj.runs
    if (balls == 0 || runs == 0) {
      return 0
    } else {
      return ((parseInt(runs) * HundredBalls) / parseInt(balls)).toFixed(2);
    }
  }
  let findEconomy = (obj) => {
    let balls = obj.balls
    let runs = obj.runs
    if (balls == 0 || runs == 0) {
      return 0
    } else {
      return ((parseInt(runs) * numOfBallsPerOver) / parseInt(balls)).toFixed(2);
    }
  }

  const player = (
    <div className="playerDetails">
    <h1>{name}</h1>
    <br/>
    <table  id="player">
      <tr><th>Strike rate</th><th>Economy</th></tr>
      <tr><td>{findStrikeRate(playerDetails.batting)}</td><td>{findEconomy(playerDetails.bowling)}</td></tr>
    </table>
    </div>
  );
  ReactDOM.render(
    player,
    document.getElementById('showPlayer')
  );
}
export default  class Player extends React.Component{
  render(){
    return(
      <li className="player" onClick={()=>ShowPlayer(this.props.name,this.props.playerDetails)}>  {this.props.name}</li>
    )
  }
}

module.exports= Player