var intersection = function (a, b) {
    var count = 0
    var y = []
    var dict = {}
    for(var i = 0; i < b.length; i++) {
      console.log(b[i])
      dict[b[i]] = true;
    }
    for(var j=0; j< a.length; j++) {
      
      if (a[j] in dict) { 
        count ++
        y.push(a[j])
       
      }
    }
    console.log(dict)
    return y
    
  }
  
  console.log(intersection([1,2,3,4], [1,4,8,10]))