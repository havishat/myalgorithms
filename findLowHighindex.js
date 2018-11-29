// Find low/high index
// Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.

// Description
// Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.
// In the following example, low and high indices would be:

// Key: 1, Low=0 and High=0

// Key: 2, Low=1 and High=1

// Key: 5, Low=2 and High=9

// key: 20, Low=10 and High=10

let find_low_index = function(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);
  
    while (low <= high) {
  
      let mid_elem = arr[mid];
  
      if (mid_elem < key) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
  
      mid = low + Math.floor((high - low) / 2);
    }
    
    if (arr[low] === key) {
      return low;
    }
  
    return -1;
  };
  
  let find_high_index = function(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);
  
    while (low <= high) {
      let mid_elem = arr[mid];
  
      if (mid_elem <= key) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
  
      mid = low + Math.floor((high - low) / 2);
    }
  
    if (arr[high] === key) {
      return high;
    }
  
    return -1;
  };
  
  let array_for_low_high = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Find Lowest Index");
  console.log("---------------------------------------");
  console.log(find_low_index(array_for_low_high, 5));
  console.log(find_low_index(array_for_low_high, 2));
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Find Highest Index");
  console.log("---------------------------------------");
  console.log(find_high_index(array_for_low_high, 5))
  console.log(find_high_index(array_for_low_high, 2));