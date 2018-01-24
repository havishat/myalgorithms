var add = function addmatrix(a , b) {
    var result = []
    // var count = 0
    // while(b.length)  {
    
    // var c = Math.max(a.length, b.length)
    // console.log(c)
    
     if(a.length >= b.length) {
       
        for(var i= 0 ; i < a.length; i++) {
          var row = []
          for(var j=0; j < a[0].length; j++){
            if (i < b.length && j < b.length) {
              row.push(a[i][j] + b[i][j])
            } else {
                row.push(a[i][j])
              }
          row.push(b[i][j])
          result.push(row)
        }
        
        return result
     }
    //   count ++
    // }
    
      return result
    }  else {
        for(var k= 0 ; k < b.length; k++) {
          var row2 = []
          for(var l=0; l < b[0].length; l++){
            if (l < a.length && k < a.length) {
              row2.push(a[k][l] + b[k][l])
              console.log("elseif", a.length, l, a[k][l], b[k][l], row2)
            } else {
              
                row2.push(b[k][l])
                console.log("hi", b[k][l])
              }
          
          // result.push(row)
        }
        // row.push(b[i][j])
        result.push(row2)
     }
    //   count ++
    // }
    return result
    }
    
    }
    
    
    X = [[9, 1], [6 , 7]]
      
    Y = [[7,8,4],
      [4,3,2],
      [1,0,1]]
      
    console.log(add(X, Y))