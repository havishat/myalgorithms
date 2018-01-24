function TimeConvert(num) { 


  // code goes here 
  mintues = (num % 60).toString()
  hours = (Math.floor(num / 60)).toString()
  num = hours + ":"  + mintues
  return num; 
         
}
   
// keep this function call here 
console.log(TimeConvert(45));   