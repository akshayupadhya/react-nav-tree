import React from 'react'

export default class Team extends React.Component{
 render(){
   return(
     <li className="Team">
      {this.props.teamName}
     </li>   
     )
 }
}

module.exports=Team