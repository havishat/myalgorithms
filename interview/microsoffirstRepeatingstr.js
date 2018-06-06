function firstRepeating(str){
    var hash = {}
  
    for(var i = 0; i<str.length; i++){

      //  console.log(min)
      if(str[i] in hash){
        hash[str[i]]++
      } else {
        hash[str[i]] = 1
      }
    }
   
   for(var i = 0; i<str.length; i++){
      if(hash[str[i]] > 1){
        return str[i]
      }
    }
    return null
  }
  console.log(firstRepeating("abbcdea"))