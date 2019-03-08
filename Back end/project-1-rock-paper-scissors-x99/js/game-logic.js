// All code should be written in this file.

let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function validTypes(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
  if (!(player === 'Player One' || player === 'Player Two')){
    return false;
  }else if(!((moveOneType === ROCK || moveOneType === PAPER || moveOneType === SCISSORS) && (moveTwoType === ROCK || moveTwoType === PAPER || moveTwoType === SCISSORS) && (moveThreeType === ROCK || moveThreeType === PAPER || moveThreeType === SCISSORS))){
    return false;
  }else if(!(Number.isInteger(moveOneValue) && Number.isInteger(moveTwoValue) && Number.isInteger(moveThreeValue))){
    return false;
  }else if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){
    return false;
  }
  let total = moveOneValue + moveTwoValue + moveThreeValue;
  if (total > 99){
    return false;
  }else{
  return true;
  }
}

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
  debugger;
  if (!(player && moveOneType && moveOneValue && moveTwoType && moveTwoValue && moveThreeType && moveThreeValue)){
    return;
  }
  else if (!validTypes(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue )){
    return;
  }else{
    if (player === 'Player One'){
      playerOneMoveOneType = moveOneType;
      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveTwoValue = moveTwoValue;
      playerOneMoveThreeType = moveThreeType;
      playerOneMoveThreeValue = moveThreeValue;
    }else if (player === 'Player Two'){
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveTwoValue = moveTwoValue;
      playerTwoMoveThreeType = moveThreeType;
      playerTwoMoveThreeValue = moveThreeValue;
    }
  }
}

function checkWinner(m1, m2){
  if (!m1 || !m2){
    return null;
  }
  if(m1 === 'rock'){
    if (m2 === 'rock'){
      return 'Tie';
    }else if (m2 === 'paper'){
      return 'Player Two';
    }else{
      return 'Player One';
    }
  }else if (m1 === 'paper'){
    if (m2 === 'rock'){
      return 'Player One';
    }else if (m2 === 'paper'){
      return 'Tie';
    }else{
      return 'Player Two';
    }
  } else {
    if (m2 === 'rock'){
      return 'Player Two';
    }else if (m2 === 'paper'){
      return 'Player One';
    }else{
      return 'Tie';
    }
  }
}

function breakTie(v1, v2){
  if(!v1 || !v2){
    return null;
  }
  if (v1 > v2){
    return 'Player One';
  } else if (v2 > v1){
    return 'Player Two';
  } else {
    return 'Tie';
  }
}

function getRoundWinner(round){
  let winner = null;
  switch (round){
    case 1:
      winner = checkWinner(playerOneMoveOneType, playerTwoMoveOneType);
      if (winner === 'Tie'){
        winner = breakTie(playerOneMoveOneValue, playerTwoMoveOneValue);
      }
      break;
    case 2:
      winner = checkWinner(playerOneMoveTwoType, playerTwoMoveTwoType);
      if (winner === 'Tie'){
        winner =  breakTie(playerOneMoveTwoValue, playerTwoMoveTwoValue);
      }
      break;
    case 3:
      winner = checkWinner(playerOneMoveThreeType, playerTwoMoveThreeType);
      if (winner === 'Tie'){
        winner =  breakTie(playerOneMoveThreeValue, playerTwoMoveThreeValue);
      }
      break;
    default:
      return null;
  }
  return winner;
}

function getGameWinner(){
  if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveTwoType || !playerOneMoveTwoValue || !playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveOneType || !playerTwoMoveOneValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue || !playerTwoMoveThreeType || !playerTwoMoveThreeValue){
    return null;
  }
  let p1Wins = 0;
  let p2Wins = 0;
  for (let round = 1; round <= 3; round++){
    let roundWinner = getRoundWinner(round);
    if (roundWinner === 'Player One'){
      p1Wins += 1;
    }else if (roundWinner === 'Player Two'){
      p2Wins += 1;
    }
  }
  if (p1Wins > p2Wins) {
    return 'Player One';
  }else if (p2Wins > p1Wins) {
    return 'Player Two';
  }else {
    return 'Tie';
  }
}
