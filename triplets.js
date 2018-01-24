function triplets(t, d) {
    sum = []
    count = 0;
    for( var i = 0; i< d.length - 2; i++ ){
      // console.log(d[i])
      for( var j = i + 1; j < d.length - 1 ; j++){
        for(var k= j + 1; k < d.length; k++){
          console.log(d[i], d[j], d[k])
          if(sum <= t ) {
            sum = d[i] + d[j] + d[k];
            count ++;
          }
          }
        }
        
          // return sum
          
      }
      // console.log(count)
      return count
         
      
    }
    
  
  
  console.log(triplets(8, [1,2,3,4]))