function fb(i) {
    var element; 
    var memo = []
    if( i == 0 ) {
        return 0; 
    } else if ( (i == 1) || (i == 2) ) {
        return  1;
    } else if (memo[i] != 0) {
        return memo[i];  
    } else {
        memo[i] =  fb(i-2) + fb(i-1) ; 
        return memo[i];
    }
}
 console.log( fb(6) )