function processData(input) {
    //Enter your code here
  sum = [];
  var total = 0;
  count = 0;
  for( var i = 0; i< input.length - 2; i++ ){
    for( var j = i + 1; j < input.length - 1 ; j++){
      for(var k= j + 1; k < input.length; k++){

            sum.push(input[i] + input[j] + input[k]);
          
          count ++;

        
        }
      }

        
    }

    
    sum.sort()

    var y = 0;
    var  i = -1;
    for (var j = 0; j < sum.length; j++) {
        
        if (sum[i] != sum[j]) {
            i++;
            sum[i] = sum[j];
            total += Number(sum[i]);
        } else {
          
          sum[i] = sum [j]
          y += sum[j]

        }

      }

      var totalsum = total  - y ;

    return totalsum
    
} 

console.log(processData([1,3,6,8,10,11]))