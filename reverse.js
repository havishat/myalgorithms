function reverse(arr){
    var temp;
    for(var i =0; i<arr.length/2;i++){
        temp = arr[i];
        arr[i] = arr[arr.length-(i+1)]
        arr[arr.length-(i+1)] = temp;
    }
    return console.log(arr);
}

x = [1,2,3,4,5]
reverse(x)