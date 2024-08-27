var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let l = 0;
    let res = '';
    let resLen = 0;

    for (let r = 0; r < s.length; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        if(resLen < r - l + 1){
            res =  s.substring(l, r + 1)
            resLen = r - l + 1;
        } 
    }
    return res;
}

let s = "abcdddbslikewqpbbb"
console.log(lengthOfLongestSubstring(s))
