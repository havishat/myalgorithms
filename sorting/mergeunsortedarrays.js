function merge(a,b){
    c = []
    for(var i=0;i<a.length;i++){
      c.push(a[i])
    }
    for(var j=0;j<b.length;j++){
      c.push(b[j])
    }
  
    console.log(c)
  
    QuickSort(c)
    return c
  }
  
  function QuickSort(c){
    RealignWithPivot(c,0,c.length-1)
    
  }
  function RealignWithPivot(c,start,end){
    if(start>=end){
      return
    }
    var pivot = start
    var newst = start + 1
    var newend = end
    while(newst <= newend){
      if(c[newst] < c[pivot]){
        newst++
        continue
      }
      if(c[newend] > c[pivot]){
        newend--
        continue
      }
      temp = c[newst]
      c[newst] = c[newend]
      c[newend] = temp
      newend--
      newst = newst + 1
    }
    temp = c[newend]
    c[newend] = c[pivot]
    c[pivot] = temp
    RealignWithPivot(c,start,newend-1)
    RealignWithPivot(c,newend+1,end)
  }
  
  a = [54,26,93,17,77,31,44,55,20]
  b = [5,4,3]
  // a = [10, 80, 30, 90, 40, 50, 70]
  //a = [4,2]
  console.log(merge(a,b))
  // console.log(a)
  // console.log(QuickSort(a))
  // console.log(a)