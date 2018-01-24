function FirstFactorial(num) { 

  // code goes here 
  if(num == 1){
      return 1
  } else {
      return num * FirstFactorial(num-1)
  }
//   return num; 
         
}
   
// keep this function call here 
FirstFactorial(readline());