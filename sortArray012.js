//three pointers l m r 
//iterate thru and see if l < m < r and l = 0; m = 1; r = 2//
//[2, 1,0,2,1,0,1,2,0]
//[1, 2,0,2,1,0,1,2,1]

//[2, 1,0,2,1,0,1,2,0]
//[0, 1,2,2,1,0,1,2,0]
//[0, 1,2,2,1,0,1,2,0]
//[0, 1,2,1,0,1,1,2,2]
//[0, 0,2,1,1,1,1,2,2]  
//      l       
//            m
  //          r
                  
var sortArray012 = function(arr){
      let l = 0;
      let m = 1;
      let r = arr.length - 1;
      while(m<r){ 
        if(arr[r] == 2){
            r--
        } 
        if(arr[m] == 1){
            m++
        } 
        
        if(arr[l] == 0){
            l++
        } 
          
        if(arr[m] != 1 && arr[l] != 0 && arr[r] != 2){
            if(arr[l] > arr[m] && arr[m] == 0){
                sawp(arr, m, l)
                  m++
                  l++
            } else if(arr[l] > arr[r] && arr[l] == 2 && arr[r] == ){
                sawp(arr, l, r)
                    l++
                    r--
            } else if(arr[l] > arr[r] && arr[l] == 2 && arr[r] == 1) {
                sawp(arr, l, r)
                    l++
                    r--
            } else {
                sawp(arr, m, l)
                  l++
                  r--
            }
        }
          console.log("l", l)
         console.log("m",m)
        console.log("r",r)
    }
    return arr
}

var sawp = function(arr, p1, p2) {
  let temp = arr[p1] ;
  arr[p1] = arr[p2];
  arr[p2] = temp
}

let array = [2, 1,0,2,1,0,1,2,1]
console.log(sortArray012(array))

/*
if(arr[m] != 1 && arr[l] == 1){
       if(arr[m] < arr[l]){
           sawp(arr, l, r)
           l++
           m++
       } else {
           if(arr[r] == 2){
               r--
           } else {
               sawp(arr, m, r)
              m++
              r--
           }
       }
    } else if(arr[r] != 2 && arr[l] == 2){
       sawp(arr, l, r)
       l++
       r--
    } else if (arr[m] == 1) {
        m++
    } else {
        l++
    }
*/
