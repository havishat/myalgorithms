
function reversestring(str){
  chararr = str.split("")
  i = 0
  j = 0
  while (j < chararr.length) {
    if (chararr[j] == " " || j == chararr.length-1) {
      if (chararr[j] == " ") {
        chararr = reverseword(chararr,i,j-1)
      }
      else {
        chararr = reverseword(chararr,i,j)
      }
      i = j + 1;
    }
    j += 1
  }
  console.log("returning ", chararr)
  return chararr.join("")
}

function reverseword(str, i, j) {
  while (i < j) {
    temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i += 1;
    j -= 1;
  }
  return str
}

console.log(reversestring("my name   is  harry   "))