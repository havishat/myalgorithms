// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

// Follow up:
// If this function is called many times, how would you optimize it?

// Related problem: Reverse Integer


var reverseBits = function(n) {
     var result = []
    while(n >= 1 ){
        result.unshift(Math.floor(n%2))
        n = n/2
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
};