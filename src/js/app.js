import React, { Component } from 'react'
import ReactDOM from 'react-dom'

require("bootstrap/dist/css/bootstrap.css")
import '../scss/styles.scss'
//import 'bootstrap'

import Season from '../components/season'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      seasons:[],
      isFetched:false,
      
    }
    this.getSeasons=this.getSeasons.bind(this)
   
  }
  
  getSeasons(){
    fetch('http://localhost:5000/seasons')
    .then(res=>res.json())
    .then(seasons=>{
      console.log(seasons)
      this.setState({seasons})
    })
    .catch(e=>console.log(e))
  }
  
  
  componentWillMount(){
    this.getSeasons()
  }
  render() {
    return ( 
    <div className="parent">
  
    <ul className="seasons col-4">
    {this.state.seasons.map((year,index)=><Season key={index} season={year} id={index.toString()} />)}  
    </ul>
    </div>)
  }
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
);