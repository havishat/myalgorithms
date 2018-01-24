function reverse(string){
    var pos = 0;
    var string1 = '';
    var string2 = '';
    for(var i = 0;i<string.length;i++){
        if(string[i] ==" "){
            pos = 1;
            i++;
        }
        if(pos == 0){
            string1 += string[i];

        }
        if(pos == 1)
            string2 += string[i];
        }
    return string2 + " " + string1 ;
}

x = 'world Thej'
console.log(reverse(x))