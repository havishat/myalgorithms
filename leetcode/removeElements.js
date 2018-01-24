var removeElement = function(nums, val) {
    var j = 0; 
    for(var i=0;i<nums.length;i++) {
      if(nums[i] != val) {
        nums[j] = nums[i]
        j++
      }
    }
    return j
};

console.log(removeElement([3,2,2,3,4,5],5))


// var removeElement = function(nums, val) {
//     for(var i = nums.length - 1; i >= 0; i--){
//         if(nums[i] === val){
//             nums.splice(i, 1);
//         }
//     }
// };