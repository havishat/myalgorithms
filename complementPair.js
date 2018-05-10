// input: [1, -4, 2, 3, 4, -1, 5, 5, -7, -7]
// output: [1,4]


function complementPair(arr){
  var temp = []
  
  for(var i = 0; i<arr.length;i++){
    for(var j=i+1;j<arr.length-1;j++){
      if((arr[i] == -(arr[j]))){
          var y = Math.abs(arr[j])
          temp.push(y)c
    }
  }
  
  return temp
  
}

console.log(complementPair([1, -4, 2, 3, 4, -1, 5, 5, -7, -7]))