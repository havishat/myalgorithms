function binarySearchRotated(array, key){
    low = 0;
    high = array.length - 1 ;
  
    
  
    
    while(low < high){
      var mid = Math.floor((low + high)/2);
      // console.log("this is high", high)
      // console.log("this is low", low)
  
      if(key == array[mid]){
        
        return mid;
      } 
  
      if( key == array[low]){
      return low
    }
    if(key == array[high]){
      return high
    }
  
    if (array[mid] < array[high] && 
      key > array[mid] && key < array[high]) {
        console.log("mid and high are normal")
        low = mid + 1
      } else if (array[mid] > array[high] &&
        (key > array[mid] || key < array[high])) {
          console.log("mid and high are abnormal")
          low = mid + 1
      } else if (array[low] < array[mid] && 
      key > array[low] && key < array[mid]) {
        console.log("low and mid are abnormal")
        high = mid - 1
      } else if (array[low] > array[mid] &&
        (key > array[low] || key < array[mid])) {
          console.log("low and mid are abnormal")
          high = mid - 1
        } else {
        console.log(array[mid])
        return -1;
      }
       
    }
    
    
  }
  
  var array = [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 170];
  
  binarySearchRotated(array, 222);