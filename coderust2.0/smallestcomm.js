function samellestcomm(a,b,c){
    for(var i=0;i<a.length;i++){
      for(var j=0;j<b.length;j++){
        if(a[i] !=b[j]){
          if(a[i]< b[j]) {
            break
          } else {
          continue
          }
        } else {
            for(var k=0;k<c.length;k++){
              if((b[j] === c[k])){
                return b[j]
            }
          }
        }
      }
    }
    return -1
  }
  
  console.log(samellestcomm([1,3,6,8,11],[1,2,4,6,9,11,12],[1,2,3,6,10,11]))
  