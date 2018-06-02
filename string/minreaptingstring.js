function nonRepeating(str){
    var hash = {}
    var y
  
    for(var i = 0; i<str.length; i++){
      min = hash[str[0]]
      //  console.log(min)
      if(str[i] in hash){
        hash[str[i]]++
      } else {
        hash[str[i]] = 1
      }
  
    }
   

    
  
  min = hash[str[0]]
  minchar = str[0]
  for(var i = 1; i<str.length; i++){
    if (hash[str[i]] < min){
      min = hash[str[i]]
      minchar = str[i]
    }
  }
  return minchar;
  }
  
  console.log(nonRepeating("arggaee"))
