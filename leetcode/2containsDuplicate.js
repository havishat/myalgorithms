// 217. Contains Duplicate
// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
    
    nums.sort(nums)
    
    // console.log(nums)
    
    for(var i=0; i<nums.length-1; i++) {
        if(nums[i] != nums[i+1]) {
            return true
        }
        
    }
    return false
};

console.log(containsDuplicate([1,2,2]))