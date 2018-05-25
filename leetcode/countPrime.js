
// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

var countPrimes = function(n) {
    count = 0;
    var prime = []
    for(var i=2; i<n;i++){
        prime[i] = true;
        // console.log(prime[i])
    }
    for(var p=2;p*p<=n;p++){

        if(prime[p] == true){
            for(var i=p*2;i<=n;i+=p){
                // console.log(i)
                prime[i] = false
            }
        }
    }
    for(var i=2;i<=n;i++){
        // console.log(prime[i])
        if(prime[i]==true){
            count++
        }
    }
    
    return count
};


// var countPrimes = function(n) {
//     var counter = 0;
   
//    var arr = new Array(n);
   
//    for(var i = 2; i < n; i++) {
//        if(arr[i]) {
//            continue;
//        }
//        counter++;
//        for(var j = i; j < n; j = j + i) {
//            arr[j] = true;
//        }
//    }
//    return counter;
// };

/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//     let count = 0;
//     let sieve = new Array(n);
//     sieve[0] = sieve[1] = true;
//     for (let i = 2; i < sieve.length; ++i) {
//         if (!sieve[i]) {
//             ++count;
//             for (let j = i + i; j < sieve.length; j += i) {
//                 sieve[j] = true;
//             }
//         }
//     }
//     return count;
// };