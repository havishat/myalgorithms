function array(arr){
    var dict = {};
    var arr2 = [];
    for(var i = 0; i<arr.length; i++){
        if(arr[i] in dict){
            dict[arr[i]]++
        } else {
            dict[arr[i]] = 1
        }
    }

    for( c in dict){
        arr2.push(c)
        arr2.push(dict[c])
    }
    return arr2
}

console.log(array(['a','a','b','b','b','c','c','c']))