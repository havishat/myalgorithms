 function maxcountDuplicate(arr){
   var dict = {};
   for(var i =0; i<arr.length;i++){
     if (arr[i] in dict) {
        dict[arr[i]]++;
      } else {
        dict[arr[i]] = 1;
      }
     }
   var max = 0;
   var y
   for(c in dict){
     if(dict[c] > max){
       max = dict[c]
     }
   }
   return c
   
 }

 console.log(Duplicate([1,9,10,2,10,4,3,10,3,1]))