import React from 'react'

import Team from './team'
import Arrow from './arrow'


export default class Season extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isClicked:false,
      teams:[]
    }
    this.toggleClass=this.toggleClass.bind(this)
    this.getTeams=this.getTeams.bind(this)
  }
  toggleClass(){
    //console.log('clicked')
    if(!this.state.isClicked){
      return "d-none second  "
    }else{
      return "second"
    }
  }

  getTeams(season){
    fetch(`http://localhost:5000/teams?season=${season}`)
    .then(res=>res.json())
    .then(teams=>{
      //console.log(teams)
      this.setState({teams})
    })
    .catch(e=>console.log(e))
  }


  render(){
    return(
    <div className="season">  
      <li className="first" onClick={()=>{this.setState({isClicked:!this.state.isClicked});this.getTeams(this.props.season)}}  id={this.props.id}>
        <Arrow isClicked={this.state.isClicked}/>
        {this.props.season}
      </li>
      <ul className={this.toggleClass()}>
          {this.state.teams.map((team,index)=> < Team teamName={team} season={this.props.season} key={index}/>)}
      </ul>
    </div>
    )
  }
}

module.exports=Season

