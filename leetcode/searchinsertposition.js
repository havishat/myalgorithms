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