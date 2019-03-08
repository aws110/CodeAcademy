// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];


// fill each array with 16 false'
for (let i = 0; i < 16; i++){
  kicks.push(false);
  snares.push(false);
  hiHats.push(false);
  rideCymbals.push(false);
}



function toggleDrum(name, index){
  if (!(name === 'kicks' ||  name === 'snares' || name === 'hiHats' || name === 'rideCymbals')){
    return null;
  }
  if (index < 0 || index > 15){
    return null;
  }
  let arrayToBeAltered = null;
  switch(name){
    case 'kicks':
      arrayToBeAltered = kicks;
      break;
    case 'snares':
      arrayToBeAltered = snares;
      break;
    case 'hiHats':
      arrayToBeAltered = hiHats;
      break;
    case 'rideCymbals':
      arrayToBeAltered = rideCymbals;
      break;
    default:
      return null;
  }
  (arrayToBeAltered[index])? arrayToBeAltered[index] = false : arrayToBeAltered[index] = true;
}

function clear(name){
  if (!(name === 'kicks' ||  name === 'snares' || name === 'hiHats' || name === 'rideCymbals')){
    return null;
  }
  let arrayToBeAltered = null;
  switch(name){
    case 'kicks':
      arrayToBeAltered = kicks;
      break;
    case 'snares':
      arrayToBeAltered = snares;
      break;
    case 'hiHats':
      arrayToBeAltered = hiHats;
      break;
    case 'rideCymbals':
      arrayToBeAltered = rideCymbals;
      break;
    default:
      return null;
  }
  for (let i = 0; i < 16; i++){
    arrayToBeAltered[i] = false;
  }
}


function invert(name){
  if (!(name === 'kicks' ||  name === 'snares' || name === 'hiHats' || name === 'rideCymbals')){
    return null;
  }
  let arrayToBeAltered = null;
  switch(name){
    case 'kicks':
      arrayToBeAltered = kicks;
      break;
    case 'snares':
      arrayToBeAltered = snares;
      break;
    case 'hiHats':
      arrayToBeAltered = hiHats;
      break;
    case 'rideCymbals':
      arrayToBeAltered = rideCymbals;
      break;
    default:
      return null;
  }
  for (let i = 0; i < 16; i++){
    (arrayToBeAltered[i])? arrayToBeAltered[i] = false : arrayToBeAltered[i] = true;
  }
}
