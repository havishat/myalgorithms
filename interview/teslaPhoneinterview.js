// [10,11,7,9,1,2,3,4,6,7,8]
// find max of subarray and each sub array is sorted. 

function main(A){
  console.log(A)
  st = 0;
  end = A.length;
  max = 0;
  sum = 0;
  // console.log(end)
  for(i= 0; i<end+1;i++){
    // console.log(i)
    if(A[i]<A[i+1]){
      sum += A[i]
      // console.log(sum)
    } else {
      sum += A[i]
      console.log(sum)
      if(max<sum){
        max = sum

      }
      sum = 0
    }
    
  }
  console.log(max)
}

console.log(main([10,11,7,9,1,2,3,4,5,6,7,8]))