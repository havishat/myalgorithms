function margeUnsortedArray(a, b){
    a = a.sort( function(k,y) { return k - y; } )
    b = b.sort( function(k,y) { return k - y; } )
    // console.log(a)
    // console.log(b.sort())
    var i = 0, j = 0, k = 0, r  = [ ];
    while(i<a.length && j<b.length){
      if(a[i] >= b[j]){
        r[k] = b[j]
        k++
        j++
      } else {
        r[k] = a[i]
        k++
        i++
      }
    }
  
    while(i<a.length){
      r[k] = a[i]
      i++
      k++
    }
    while(j<b.length){
      r[k] = b[j]
      j++
      k++
    }
    return r
  }
  
  console.log(margeUnsortedArray([1,10,2,0],[6,7,4,3]))