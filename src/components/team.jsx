import React from 'react'
// import * as classNames from 'classnames'
let classNames = require('classnames')

import Player from './player'
import Arrow from './arrow'
import {SpaceToHyphen} from '../js/utils'
import {getPlayers} from '../js/ajaxCalls'


export default class Team extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isClicked:false,
      players:{},
      playerNames:[]
    }
    
  }
  

  getPlayers=(season,team)=>{
    fetch(`http://localhost:5000/players?season=${season}&team=${SpaceToHyphen(team)}`)
    .then(res=>res.json())
  }
  
  TeamCLick=()=>{
    getPlayers(this.props.season,this.props.teamName)
    .then(players=>{
      //console.log(players)
      this.setState({players})
    })
    this.setState({isClicked:!this.state.isClicked})
  }
 render(){
  let PlayersClass=classNames({
    'second':true,
    'd-none':!this.state.isClicked
  })
   return(
     <div className="players">
      <li className="team" onClick={this.TeamCLick}>
        <Arrow isClicked={this.state.isClicked}/>{this.props.teamName} 
      </li>   
      <ol className={PlayersClass}>
        {Object.keys(this.state.players).map((player,index)=> <Player key={index} name={player} setPlayer={this.props.setPlayer} classname={SpaceToHyphen(this.props.teamName)} playerDetails={this.state.players[player]}/> )}
      </ol>
     </div>
    )
 }
}

module.exports=Team