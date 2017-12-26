let baseUrl="http://localhost:5000/"

import {SpaceToHyphen} from './utils'
export let getSeasons=()=>{
  return new Promise((resolve,reject)=>{

    fetch(`${baseUrl}seasons`)
    .then(res=>res.json())
    .then(res=>resolve(res))
    .catch(e=>reject(e))
  })
  
}

export let getTeams=(season)=>{
  return new Promise((resolve,reject)=>{
    fetch(`${baseUrl}teams?season=${season}`)
    .then(res=>res.json())
    .then(result=>resolve(result))
    .catch(e=>reject(e))
  })
}
let getPlayers=(season,team)=>{
  return new Promise((resolve,reject)=>{
    fetch(`${baseUrl}players?season=${season}&team=${SpaceToHyphen(team)}`)
    .then(res=>res.json())
    .then(result=>resolve(result))
    .catch(e=>reject(e))
  })
}

module.exports={
  getSeasons,
  getTeams,
  getPlayers
}