function numToBit(num){

    var result = []
    while(num >= 1 ){
        result.unshift(Math.floor(num%2))
        num = num/2
    }
    // result.reverse()
    
    for(var i=0; i<result.length;i++){
     if(result[i] == 0){
       result[i] = 1
     }else{
       result[i] = 0
     }
   }

    var binary = " "

   for(var i=0; i<result.length;i++){
     binary += result[i]
   }
   console.log(binary)
  var digit = parseInt(binary, 2);

    return digit
}

console.log(numToBit(50))