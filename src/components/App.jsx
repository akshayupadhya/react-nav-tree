import React from 'react'

import Season from './season'
import RightPane from './rightPane'

import {AddEconomy,AddStrikeRate} from '../js/utils'
import {getSeasons} from '../js/ajaxCalls'

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      seasons:['loading'],
      isFetched:false,
      player:{}

    }
  }

  setPlayer=(player)=>{
    this.setState({
      player
    })
  }
  
  
  componentDidMount(){
    getSeasons()
     .then(seasons=>{
      console.log(seasons)
      this.setState({seasons})
    })
    .catch(e=>console.log(e))

  }
  render() {
    return ( 
    <div className="parent d-flex col-12">
      <ul className="seasons col-4">
      {this.state.seasons.map((year,index)=><Season setPlayer={this.setPlayer} key={index} season={year} id={index.toString()} />)}
      </ul>
      <div className="col-8" id="showPlayer">
        {typeof(this.state.player.name)!=="undefined"?<RightPane name={this.state.player.name}  economy={AddEconomy(this.state.player)} strikeRate={AddStrikeRate(this.state.player)} />:""}
      </div>
    </div>)
  }
}

module.exports=App