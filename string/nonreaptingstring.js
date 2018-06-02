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
   
   for(var i = 0; i<str.length; i++){
      if(hash[str[i]] == 1){
        return str[i]
      }
    }
    return null
  }
  console.log(nonRepeating("arggaee"))


  // var str = "caaba";

// for(var i =0; i<str.length;i++){
//   if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
//     console.log(str.charAt(i));
//     break
//   }
// }
  