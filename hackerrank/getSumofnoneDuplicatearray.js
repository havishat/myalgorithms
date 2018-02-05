var removeDuplicatesSum = function(nums) {
    if(nums.length<2){
        return nums.length;
    }
    
    nums = nums.sort()
    
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
    console.log(nums)
    var sum = nums[0]
    for(var x=1; x<nums.length;x++) {
      // console.log(nums[x])
      sum += nums[x] 
      console.log(sum)
    }
   
    // console.log(sum)
    return sum;
};


console.log(removeDuplicates([4,2,2,4,5]))