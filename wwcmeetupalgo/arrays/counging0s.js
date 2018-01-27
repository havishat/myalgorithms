var counting = function (a) {
    var count = 0
    for(var i=0; i<a.length;i++) {
      if(a[i] == 0) {
        count ++
      }
    }
    return count 
  
  }
  
  console.log(counting([0,0,0,1,1,1]))