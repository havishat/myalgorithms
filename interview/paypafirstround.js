 

// Sample Input 0

// abc
// def
 

// Sample Output 0

// adbecf
 

// Explanation 0

// a = abc

// b = def

// Taking alternate characters from both the strings, we get adbecf



process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});
/*
 * Complete the function below.
 */
function mergeStrings(a, b) {
    var i = 0;
    var j = 0;
    var out = ""
    while(i< a.length && j < b.length){
        // if(a.length == b.length){
        //     if(i==j){
        //     out += a[i]
        //     i++
        // } else if(j>i){
        //     out += b[j]
        //     j++
        // }
        out += a[i]
        
        out += b[j]
        i++
        j++
        
    }
        
        // substring!! :)
        if(a.length < b.length){
            out += b.substring(j)
        } else {
            out += a.substring(i)
        }
        // substring (start, how many)
        // } else {
            
        // }
       
        
    // }
    
    // while(i<=a.length -1){
    //     out += a[i]
    //     i++
    // }
    
    // while(j<=b.length -1){
    //     out += b[j]
    //     j++
    // }
    return out;

}

var fs = require('fs');
var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var _a = __input_stdin_array[__input_currentline].trim();
    __input_currentline += 1;
    
    var _b = __input_stdin_array[__input_currentline].trim();
    __input_currentline += 1;
    
    res = mergeStrings(_a, _b);
    wstream.write(res+"\n");
    
    wstream.end();
});