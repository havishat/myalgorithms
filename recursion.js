// 1)  print "hello world!" 10 times 

function helloworld(str){
    if(str == 0) {
        return "hello"
    } else {
        //  console.log("helloworld")
        console.log("helloworld") 
        return helloworld(str-1)
    }
}

helloworld(10)

//2) power of  base to exp

function basetoexp(b,e){
    if(e==1){
        return b
    } else {
        var r = b * basetoexp(b, e-1)
        return r
    }
}

console.log(basetoexp(2,2))

//3) Factorial (similar to loop)

function factorial(f){
    if(f == 1 || f == 2){
        return f
    } else {
        var r = f * factorial(f-1)
        return r
    }
}

console.log(factorial(5))

//4) Mystery number (find the output of this function)

function mysterynumber(n){
    if(n<10){
        return n
    } else {
        var a = n/10;
        var b = n%10;
        return mysterynumber(a+b)
    }
}

console.log(mysterynumber(247))

//5) print binary value of a number 

function convertnumtobinary(n){
    if(n==1 || n==0){
        return String(n)
    } 
    // console.log(convertnumtobinary(Math.floor(n/2)))
    return convertnumtobinary(Math.floor(n/2)) + String(n%2)
}

console.log(convertnumtobinary(2))

// 6) Find the word is palindrome or not 
function isPalindrome(word) {
    var n = word.length
    if(n == 0 || n==1){
        return true
    } else if (word[0] != word[n-1]) {
        return false
    } else {
        return isPalindrome(word.substring(1, word.length-1))
    }
    // return isPalindrome(n-2)
    
}


console.log(isPalindrome("Tiruvuri"))

var count7 = function (num, count=0) {
    if (!num) {
      return 0;
    }
    if(num <0){
        num *=-1
    }
    if (num%10 === 7) {
      count++;
    }
    if (num === 0) {
      return count;
    }
    return count + count7(Math.floor(num/10))
  }
  
  console.log(count7(-77717))


// 8) Sum Digits
function sumDights(num) {
    if(num <=10){
        return num;
    }
    return sumDights(Math.floor(num/10) + Math.floor(num%10))
}

// console.log(sumDights(21))

// function sumDigitss(n) {
//     if (n == 0) return 0;
//     return n % 10 + sumDigitss(n / 10);
// }

// console.log(sumDigitss(12))
// console.log(sumDightss(21))

// fibonacci sequence 
function fibonacci(n){
    if(n==0){
        return 0
    } else if(n == 1 || n==2){
        return 1
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
console.log(fibonacci(5))
