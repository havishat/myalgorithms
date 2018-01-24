function canReach(x1, y1, x2, y2) {
    
    if(x1+y1 == x2){
      
        if(x2+y1 == y2 || x2+y1+x2 == y2) {
            return "Yes"
        }
    }
    
    return "No"

}

console.log(canReach(1,4,5,14))