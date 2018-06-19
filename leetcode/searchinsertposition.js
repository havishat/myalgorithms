// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0


var searchInsert = function(nums, target, start=0, end=nums.length,mid=Math.floor((end+start)/2)) {
  
    if(target == nums[mid] || (target > nums[mid-1] && target < nums[mid])) {
      return mid;
    } else if(target < nums[0]) {
      return 0
    } else if(target > nums[nums.length-1]) {
      return end;
    } 
    if(target < nums[mid]) {
      end = mid;
    } else if(target > nums[mid]) {
      start = mid;
    }
    return searchInsert(nums, target, start, end)
};


console.log(searchInsert([1,3,5,6,7], 1))


var searchInsert = function(nums, target) {
    var l = 0;
    var u = nums.length-1;
    var mid;

    while(l <= u) {
        mid = parseInt((u+l)/2);
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
          u = mid-1;
        } else {
          l = mid+1;
        }
    }

    return l;
};

var searchInsert = function(nums, target) {
  if(nums[0]==target){
      return 0
  }
  if(nums[nums.length-1] == target){
      return nums.length - 1
  }
 var low = 0;
var high = nums.length -1 
while(low <= high){
    mid = Math.floor((high + low)/2)
    if(nums[mid] == target){
        return mid
    }else if(nums[mid]>target){
        high = mid - 1
    } else {
        low = mid + 1
    }
    
}
  
  return low
};

console.log(searchInsert([1,3,5,6], 5))