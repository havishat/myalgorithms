var number = -3.2
star = number.toString()
// console.log(star.length)
count = 0
for(var i = 0; i<star.length;i++){
  if(star[i] == "-" || star[i] == "."){
    continue
  } else {
    count++
  }
}
console.log(count)