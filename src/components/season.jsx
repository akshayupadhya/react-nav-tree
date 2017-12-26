import React from 'react'
var classNames = require('classnames');

import Team from './team'
import Arrow from './arrow'
import {getTeams} from '../js/ajaxCalls'


export default class Season extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isClicked:false,
      teams:[]
    }
    
  }

  
  SeasonClick=()=>{
    this.setState({isClicked:!this.state.isClicked});
    getTeams(this.props.season)
    .then(teams=>{
      //console.log(teams)
      this.setState({teams})
      
    })
    .catch(e=>console.log(e))
  }

  render(){
    let TeamsClass=classNames({
      'second':true,
      'd-none':!this.state.isClicked
    })
    return(
    <div className="season">  
      <li className="first" onClick={this.SeasonClick}  id={this.props.id}>
        <Arrow isClicked={this.state.isClicked}/>
        {this.props.season}
      </li>
      <ul className={TeamsClass}>
          {this.state.teams.map((team,index)=> < Team teamName={team} season={this.props.season} setPlayer={this.props.setPlayer} key={index}/>)}
      </ul>
    </div>
    )
  }
}

module.exports=Season

