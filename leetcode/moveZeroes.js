var moveZeroes = function(nums) {
    
    var nums2 = [];
    var temp = [];
    var k=0
    
    for(var i=0; i<nums.length; i++){
        temp.push[nums[i]]
        if(nums[i] === 0){
            temp.push(nums[i]);
        } else {
            // nums.push(nums[i]);/
            // nums2.push(nums[i])
            nums[k] = nums[i]
            k++
            
        }
    }
    
    nums.length = k
    
    for(var j=0;j<temp.length; j++){
        nums.push(temp[j])
        // console.log(nums2)
    }
    
    console.log(nums)
    

    
};

console.log(moveZeroes([0,1,0,3,12]))


// var moveZeroes = function(nums) {

//     var k=0
    
//     for(var i=0; i<nums.length; i++){
//         // temp.push[nums[i]]
//         if(nums[i] != 0){
//           nums[k] = nums[i]
//           k++
//         }
         
//     }
    
//     while (k < nums.length){
//       nums[k++] = 0;
//     }
    
//     console.log( nums)

// };


var moveZeroes = function(nums) {
    

    if(nums.length < 1){
      return
    }
    let length = nums.length;
    let read = 0;
    let write = 0;
  
    while(read <= nums.length - 1){
      if(nums[read] != 0){
        nums[write] = nums[read]
        write++
      }
      read++
    }
  
    while(write <= nums.length-1){
      nums[write] = 0;
      write += 1;
    }
  
  };