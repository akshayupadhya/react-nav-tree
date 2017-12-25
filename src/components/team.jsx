import React from 'react'

import Player from './player'

export default class Team extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isClicked:false,
      players:{},
      playerNames:[]
    }
    this.toggleClass=this.toggleClass.bind(this)
    this.getPlayers=this.getPlayers.bind(this)
  }
  SpaceToHyphen(name){return name.replace(/\s+/g, '-')}
  getPlayers(season,team){
    fetch(`http://localhost:5000/players?season=${season}&team=${this.SpaceToHyphen(team)}`)
    .then(res=>res.json())
    .then(players=>{
      console.log(players)
      this.setState({players})
    })
  }
  toggleClass(){
    //console.log('clicked')
    if(!this.state.isClicked){
      return "d-none   "
    }else{
      return ""
    }
  }

 render(){
   return(
     <div className="players">
   
     <li className="team" onClick={()=>{this.getPlayers(this.props.season,this.props.teamName);this.setState({isClicked:!this.state.isClicked})}}>
      {this.props.teamName} 
     </li>   
      <ol className={this.toggleClass()}>
        {Object.keys(this.state.players).map((player,index)=> <Player key={index} name={player} classname={this.SpaceToHyphen(this.props.teamName)}/> )}
      </ol>
     </div>
     )
 }
}

module.exports=Team