
// There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.


// if statement to check if array2[i] is miss from array1
// keep the first array in dict and check from second array2 if first array element is there

function misselement(array1,array2){
    tempdict = {};
    for(var i =0; i<array2.length;i++){
        tempdict[array2[i]] = 1
        console.log(tempdict)
    }
    
    for(var j=0;j<array1.length;j++){
      if (array1[j] in tempdict ){
          // console.log(array1[j])
      } else {
        return array1[j]
      }
    }
    
  }
  
  
  // function misselement(array1,array2){
  //   var found = false;
  //   for(var i=0;i<array1.length;i++){
  //     for(var j=0; j<array2.length;j++){
  //       if(array1[i] == array2[j]){
  //         found = true
  //         break
  //       } 
  //       found = false;
  //     }
  //     if(!found){
  //       // console.log(array1[i])
  //       return array1[i]
  //     }
      
  //   }
    
  // }
  
  
console.log(misselement([1,2,4,6,3],[1,6,4,3]))
  