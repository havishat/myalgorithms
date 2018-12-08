// print 1 to 100 
// modle 5 print has true
// moudle 6 print has flase 

function onetohundred(){
    for(var i = 1; i<= 100; i++){
        if(i%5 == 0){
            return true
        } else if(i%6 == 0){
            return false 
        }
    }
}