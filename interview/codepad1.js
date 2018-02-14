
//ivani coding algo codepade
/*
== Part 1 ==
For the numbers 1 to 100
  print each number on its own line
  

== Part 2 ==
For the numbers 1 to 100,
  print each number on a line
  For each condition that is met, include on that printed line the associated string (from table below)

multiple of 3 "Ivani"
multiple of 4 "is"
multiple of 5 "cool"

== Part 3 ==
As in part 2 with a corner case:
  if the output woud be "i is cool" (where i is the number),
    only print "i" instead
*/


/*
1
2
3 Ivani
*/

// fyi per internet, you can print without newline using process.stdout.write()


//part1
for(var i=1;i<=100;i++){
    //    console.log(i)
      if(i%3 ==0 && i%4==0 && i%5==0){
        console.log(i, "Ivani", "is", "cool")
      } else if(i%3 == 0 && i%5 ==0) {
        console.log(i,"Ivani","cool")
      } else if(i%3 ==0 && i%4==0){
        console.log(i,"Ivani","is")       
      } else if(i%4 ==0 && i%5==0){
        console.log(i,"is","cool")
      }else if(i%3 == 0) {
        console.log(i, "Ivani")
      } else if(i%4 ==0){
        console.log(i,"is")
      } else if(i%5 == 0) {
        console.log(i, "cool") 
      } else {
        console.log(i)
      }
    }
    
    
    
    
    
    
    
    
    