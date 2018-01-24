function twosum(arr, target) {
    dict = {}
    for(var i=0; i< arr.length; i++) {
        for(var j=i+1; j< arr.length; j++) {
            if(target == (arr[i] + arr[j])) {
                return [i, j]
            }
        }
    }
}

console.log(twosum([2,7,11,15], 9))