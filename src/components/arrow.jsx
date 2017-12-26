import React from 'react'

export default class Arrow extends React.Component{
  constructor(props){
    super(props)
    
  }
  addClass(){
    if(this.props.isClicked){
      return "rotated"
    }return ""
  }
  render(){
    return(
      <img className={this.addClass()} id="img0" src="https://www.techwalla.com/ui/images/icons/down4.svg"/>
    )
  }
}

module.exports=Arrow