import React from 'react'

export default class Arrow extends React.Component{
  constructor(props){
    super(props)
    
  }
  toggleArrow(){
    if(this.props.isClicked){
      return "rotated"
    }return ""
  }
  render(){
    return(
      <img className={this.toggleArrow()} id="img0" onClick={()=>this.setState({isClicked:!this.state.isClicked})}src="https://www.techwalla.com/ui/images/icons/down4.svg"/>
    )
  }
}

module.exports=Arrow