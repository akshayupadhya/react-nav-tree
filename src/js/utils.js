export let SpaceToHyphen=(name)=>name.replace(/\s+/g, '-');
export let AddEconomy = (player) => {
  const numOfBallsPerOver = 6.00
  let obj=player.details.bowling||{balls:0,runs:0}
  let balls = obj.balls
  let runs = obj.runs
  if (balls == 0 || runs == 0) {
    return 0
  } else {
    return ((parseInt(runs) * numOfBallsPerOver) / parseInt(balls)).toFixed(2);
  }
}

export let AddStrikeRate = (player) => {
  const HundredBalls = 100.00
  let obj=player.details.batting||{balls:0,runs:0}
  let balls = obj.balls
  let runs = obj.runs
  if ( balls == 0 || runs == 0) {
    return 0
  }else {
    return ((parseInt(runs) * HundredBalls) / parseInt(balls)).toFixed(2);
  }
}
module.exports={
  SpaceToHyphen,
  AddEconomy,
  AddStrikeRate
}