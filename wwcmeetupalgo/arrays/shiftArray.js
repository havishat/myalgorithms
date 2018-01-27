var shiftArray = function (a,k) {
    var temp
    for(var i=0; i<k;i++) {
     temp = a[i]
      // console.log(temp)
     a[i] = a[i+k]
     console.log(a[i])
      // console.log(a[i])
     a[i+k] = temp
    // console.log(a[i])
     
    }
  return a
  }
  
console.log(shiftArray([1,2,3,4,5,6],3))

var shiftArray = function (a,k) {
    var temp
    for(var i=0; i<k;i++) {
      // a = a + b 
      // b = a - b 
      // a = a - b 
     a[i] = a[i] + a[i+k]
     a[i+k] = a[i] - a[i+k]
     a[i] = a[i] - a[i+k]
      // console.log(temp)
    // a[i] = a[i+k]
      // console.log(a[i])
    // a[i+k] = temp
    // console.log(a[i])
     
    }
  return a
  }
  
  console.log(shiftArray([1,2,3,4,5,6],1))
     