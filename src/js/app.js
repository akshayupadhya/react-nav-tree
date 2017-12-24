import react, { Component } from 'react'
import {ReactDom} from 'react-dom'

import '../scss/styles.scss'
export default class Hello extends Component {
  render() {
    return ( <div> Hello from react </div>)
    }
  }

const mountNode = document.querySelector('#root');
ReactDOM.render(<Hello />, mountNode);