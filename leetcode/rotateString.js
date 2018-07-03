var rotateString = function(A, B) {
    var dict = {}
    var y = 0
    var x = 0
    for(var i = 0; i<A.length; i++){
        dict[A[i]] = i
    }
    console.log(dict)
    for(var j = 0; j<B.length; j++){
        // console.log(i)
        
        if( A[0] == B[i]){
            // console.log(B[i])
            // console.log(i)
            y = Math.abs(dict[A[0]] - i)

        }
    }
    console.log(y)

    

    for(var j = 0 ; j<B.length;j++){
        
            // console.log(k)
            if(B[j] in dict ){
                // dict[B[j]] - j
                x = Math.abs(dict[B[i]] - B[j])
            }
         
            console.log(x)
            // console.log(y)
            if(x != y){
                    return false
                }
    
}
    return true
};



console.log(rotateString("abcde","cdeab"))
