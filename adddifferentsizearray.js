function addarray(a,b) {
    var c  = []
    if (a.length >= b.length){
  
      for(var i=0; i < a.length; i++){
          if (i < b.length)
              c[i] = a[i] + b[i];
            
          else
              c[i] = a[i];
      }
      console.log("1", c)
      return c;
  
  } else {
      for(var i=0; i<b.length; i++){
          if (i < a.length)
              c[i] = a[i] + b[i];
          else
              c[i] = b[i];
      }
      console.log(c)
      return c;
  
  }
          
  }
  
  console.log(addarray([1, 2, 3],[3, 2]))
  
  
  