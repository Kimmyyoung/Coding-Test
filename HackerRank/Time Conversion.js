function timeConversion(s) {
  // Write your code here
  //12:09:20AM
  
  let hour = s.substr(0,2);
  let minutes = s.substr(3,2);
  let seconds = s.substr(6,2);
  
  let modifier = s.substr(-2,2);
  
  if(hour === '12') {hour = '00';}
  

  if (modifier === 'PM') {
      hour = parseInt(hour, 10) + 12;
  }
  let time = `${hour}:${minutes}:${seconds}`;
  return time;       
}