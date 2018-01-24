// 442. Find All Duplicates in an Array

// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]


var findDuplicates = function(nums) {
    
    if(nums.length == 0) {
        return nums
    }
    nums.sort()
    temp = []
    var prev = nums[0]
    console.log("prev1", prev)
    
    for(var i = 1 ; i<= nums.length; i++) {
        var current = nums[i]
        console.log("current1", current)
        if( prev == current) {
            console.log(prev)
            console.log(current)
            // break
            temp.push(nums[i])
        } else {
            prev = current;
           
            console.log("prev2", prev)
        }
        // temp.push(current)
         
    }
    console.log(nums)
   
    return temp
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))