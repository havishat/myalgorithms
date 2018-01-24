// var removeDuplicates = function(nums) {
//     if (nums.length == 0) return 0;
//     var i = 0;
//     for (var j = 1; j < nums.length; j++) {
//         if (nums[j] != nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1;
// };

var removeDuplicates = function(nums) {
    if(nums.length<2){
        return nums.length;
    }
    
    let i = 1,j = 1,temp = nums[0];
    while(j<nums.length){
        if(nums[j]!== temp){
            temp = nums[j];
            nums[i] = temp;
            i++;
        }
        j++;
    }
    nums.splice(i,j)
    return nums;
};

console.log(removeDuplicates([1,1,2,2,3]))