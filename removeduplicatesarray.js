function removeD(arr) {
    var newarr = {}
    var r = []
    for(var i=0; i<arr.length; i++){
        console.log(arr[i])
        newarr[arr[i]] = null
    }
    
    console.log(newarr)
    for(i in newarr) {
        r.push(i)
    }
    return r
}

console.log(removeD([1,10,2,11,20,3,1,4,5,7,3,11,9,8,10]))