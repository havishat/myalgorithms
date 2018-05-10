// reverseVowels(word) - Given an array of characters, 
// reverse the vowels but keep the consonants in place.

// Space complexity: O(1)
// Time complexity: O(N)
// Example: ["w","h","i","t","e","b","o","a","r","d"] -> 
//          ["w","h","a","t","o","b","e","i","r","d"]
//             s                                  e

function reverseVowels(word){
    var s = 0
    var e = word.length; 
    
  //   while(s<e){
  // //     for(var i=0;i<temp.length;i++){
  //       if(helper(word[s]) && helper(word[e])){
  //         temp = word[s]
  //         word[s] = word[e]
  //         word[e] =  temp
  //         console.log(word[s])
  //       }
  //     s++
  //     e--
  //   }
  
  
    while (s < e)
      {
        // console.log(helper(word[e]))
        if (!helper(word[s]))
        {
            s++;
            continue;
        }
        if (!helper(word[e]))
        {
            e--;
            continue;
        }
   
        // swapping
        temp = word[s]
        word[s] = word[e]
        word[e] =  temp

        s++;
        e--;
    }
  
    
    
    return word
    
    
}
  
function helper(c){
    // var vowels = ["a","e","i","o","u"];
    return (c=='a' || c=='A' || c=='e' ||
                c=='E' || c=='i' || c=='I' ||
                c=='o' || c=='O' || c=='u' ||
                c=='U');
}
  
  
  
  
console.log(reverseVowels(["w","h","i","t","e","b","o","a","r","d"]))