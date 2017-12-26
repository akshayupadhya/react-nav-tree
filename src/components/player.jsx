import React from 'react'
import ReactDOM from 'react-dom'


export default  class Player extends React.Component{
  constructor(props){
    super(props)
  }
  viewPlayer=()=>{
    this.props.setPlayer({
      name:this.props.name,
      details:this.props.playerDetails
    })
  }
  render(){
    return(
      <li className="player" onClick={this.viewPlayer.bind(this)}>  {this.props.name}</li>
    )
  }
}

module.exports= Player