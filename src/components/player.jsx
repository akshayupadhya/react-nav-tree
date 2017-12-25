import React from 'react'

export default  class Player extends React.Component{
  render(){
    return(
      <li className={this.props.classname}> {this.props.name}</li>
    )
  }
}

module.exports= Player