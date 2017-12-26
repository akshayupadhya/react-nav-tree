import React from 'react'

import {AddEconomy,AddStrikeRate} from '../js/utils'

export default class RightPane extends React.Component{
  render(){
    console.log(this.props.player)
    return(
      <div >      
          <h1>{this.props.name}</h1>
          <br/>
          <table  id="player">
            <thead>
              <tr>
                <th>Strike rate</th><th>Economy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.strikeRate}</td><td>{this.props.economy}</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

module.exports=RightPane