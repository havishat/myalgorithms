function Duplicate(arr){
  var dict = {};
  var max = 0;
  for(var i =0; i<arr.length;i++){
    if (arr[i] in dict) {
       dict[arr[i]]++;
     } else {
       dict[arr[i]] = 1;
     }
     if(dict[arr[i]] > max){
         max = dict[arr[i]]
     }
    }
   
   for(c in dict){
     if(max == dict[c]){
       return c
     }
   }

}
console.log(Duplicate([10,10,10,10,10,10,9,3,3,2,4,3,1,3,1]))