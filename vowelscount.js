var vowelscount = function(str) {
    var count =0;
    var vowels = 'aeiou';
    var lowerCaseString = str.toLowerCase();

    for(var i=0; i<str.length;i++) {
        // if(str[i]=='o' || str[i]=='e' || str[i]=='a' || str[i]=='i') {
        //    count ++;
        // }
        if(vowels.indexOf(lowerCaseString[i]) >= 0) {
            count++
        }

    }
    return count;
}

console.log(vowelscount("hello"))