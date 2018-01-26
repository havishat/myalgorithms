var reverse = function (a) {
    for(var i=0; i<a.length/2;i++) {
      temp = a[a.length-1-i]
      a[a.length-1-i] = a[i]
      a[i] = temp
      // a[a.length-i] -= 1
      // console.log(a)
       
    }
   return a
  }
  
  console.log(reverse([1,2,3,4,5,6]))