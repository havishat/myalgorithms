// 69. Sqrt(x)
// Implement int sqrt(int x).

// Compute and return the square root of x.

// x is guaranteed to be a non-negative integer.


// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we want to return an integer, the decimal part will be truncated.


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(num) {
    if (num < 2){
return num
}
var start = 0;
var end = num
while(start + 1 < end){
var midPoint= start + Math.ceil((end - start)/2)
var value = midPoint * midPoint
if(value == num){
return midPoint
}else if(value < num){
start = midPoint
}else {
end = midPoint
}
}
if(end * end ==num){
return end;
}
return start
    
};