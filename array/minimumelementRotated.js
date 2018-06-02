// A sorted array is rotated at some unknown point, find the minimum element in it Ex: 5,6,1,2,3,4 Ans: 1
//o(n)
function minVal(arr){
    var min = arr[0];
    var temp;
    for(var i=0; i<arr.length; i++){
      if(min>arr[i]){
        min = arr[i];
        temp = i;
      }
    }
    return min
  }
  
  console.log(minVal([5,6,1,2,3,4]))


  // o(logn)

  function minVal(arr, low, high){
    var low = 0;
    var high = arr.length -1
    mid = Math.floor((low+high)/2)
   if(high<low){
     return arr[0]
   } 
   if(high == low){
     return arr[low]
   }
   
   if(mid < high && arr[mid+1]< arr[mid]){
     return arr[mid+1]
   }
   if(mid>low && arr[mid] < arr[mid-1]){
     return arr[mid]
   }
  
   if(mid > low && arr[mid]> arr[mid-1]){
     return arr[mid-1]
   }
   
   if(arr[high]> arr[mid]){
     return minVal(arr,low,mid-1)
   }
   return minVal(arr,mid+1,high)
  }
  
  console.log(minVal([1,2,3, 4]))