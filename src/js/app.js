import React, { Component } from 'react'
import ReactDOM from 'react-dom'

require("bootstrap/dist/css/bootstrap.css")
import '../scss/styles.scss'

import  App from '../components/App'

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);