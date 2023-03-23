// when we will reach
const travelInformation = { 

    speed: 50,
    destinationDistance: 432,
  };
  function travellingTime(travelInformation){
  
  const Time = travelInformation.destinationDistance / travelInformation.speed;
  const hour = Math.floor(Time);
  const minutes = Math.floor((Time - hour) *  60);
   
  return `${hour} hours  ${minutes} minutes`;
  

  }
  const travelingTime= travellingTime(travelInformation);
  console.log(travellingTime);