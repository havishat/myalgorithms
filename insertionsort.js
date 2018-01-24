function insertionsort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var value = arr[i]
        for(var j=i-1; j>=0 && arr[j] >value; j --) {
            arr[j+1] = arr[j];

        }
        arr[j+1] = value;
    }
}
var arr = [1,4,2,6,5,8]
insertionsort(arr)
console.log(arr)