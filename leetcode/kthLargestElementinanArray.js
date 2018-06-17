// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var divide = function(n) {
  if (n.length == 1){
    // console.log("returning length 1 for ", n)
    return n;
  }
  var mid = Math.floor(n.length/2);
  var a = n.slice(0, mid);
  var b = n.slice(mid, n.length);
  var n1 = divide(a);
  // console.log("calling divide for ", a, " returned ", n1);
  var n2 = divide(b);
  // console.log("calling divide for ", b, " returned ", n2);
  m = merge(n1,n2);
  return m;
}

var merge = function(n1, n2) {

  //Merge two sorted arrays n1 and n2 into one array
  var q = []
  var i = 0;
  var j = 0;
  while (i < n1.length && j < n2.length) {
    if (n1[i] < n2[j]) {
      q.push(n1[i]);
      i += 1;
    } else {
      q.push(n2[j]);
      j += 1;
    }
  }
  while(i < n1.length) {
    q.push(n1[i]);
      i += 1;
  }
  while(j < n2.length) {
    q.push(n2[j]);
    j += 1;
  }

  return q;
}

var findKthLargest = function(nums, k) {
        l = nums.length
        nums = divide(nums)
        return nums[l-k]
    
};