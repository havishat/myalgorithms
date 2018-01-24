var add = function addmatrix(a , b) {
    var res = []
   var count = 0
   if(a.length == b.length) {
      for(var i= 0 ; i < a.length; i++) {
        var row = []
        for(var j=0; j < a[0].length; j++){
          row.push(a[i][j] + b[i][j])
        }
       res.push(row)
      }
   }
   
    return res
   }
   
   X = [[9, 1], [6 , 7]]
      
   Y = [[7,8],
      [4,3]]
   
   console.log(add(X, Y))