/*var basicOjb = {x: 40, y: 50};
const { x: bigX, y: bigY} = basicOjb;
console.log(bigY) // ans = 40 */ 


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
  
  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const {today: today, tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
  }
  
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79