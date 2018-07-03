var rotateString = function(A, B) {
    var dict = {}
    var y = 0
    var x = 0
    for(var i = 0; i<A.length; i++){
        dict[A[i]] = i
    }
    for(var i = 0; i<B.length; i++){
        if(dict[A[0]] == B[i]){
            y = Math.abs(dict[A[0]] - i)
        }
    }

    for(var j = 0 ; j<B.length;j++){
            if(dict[A[j]] == B[j] ){
                x = Math.abs(dict[A[i]] - B[j])
            }
            if(x !=y){
                return false
            }
    }
    return true
};