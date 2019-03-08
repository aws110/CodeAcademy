// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request_type, index, newPresetArray) => {
  debugger;
  if (index < 0 || index > 15){
    return [404];
  }else if(!(request_type === 'GET' || request_type === 'PUT')){
    return [400];
  }
  //index is OK so first element in final array is 200
  let returnedArray =[200];
  if (request_type === 'GET'){
    returnedArray.push(presets[index]);
    return returnedArray;
  }else if (request_type === 'PUT'){
    if(!newPresetArray){
      return returnedArray;
    }
    presets[index] = newPresetArray;
    returnedArray.push(presets[index]);
    return returnedArray;
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
