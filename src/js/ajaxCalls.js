let baseUrl="http://localhost:5000/"

import {SpaceToHyphen} from './utils'
export let getSeasons=()=>
fetch(`${baseUrl}seasons`)
.then(res=>res.json())
 
 

export let getTeams=(season)=>
  fetch(`${baseUrl}teams?season=${season}`)
  .then(res=>res.json())
  

let getPlayers=(season,team)=>
  
    fetch(`${baseUrl}players?season=${season}&team=${SpaceToHyphen(team)}`)
    .then(res=>res.json())
    
  

module.exports={
  getSeasons,
  getTeams,
  getPlayers
}