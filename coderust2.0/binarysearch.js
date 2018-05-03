var bs = function(a,key){
    let low = 0
    let high = a.length - 1
    while(low <= high) {
      let mid = low + Math.floor((high-low)/2);
      if(a[mid] == key){
        return mid;
      }
      if(key<a[mid]){
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
  
  console.log(bs([1,10,20,47,59,63],20))