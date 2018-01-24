function range(arr, start, end){
    for(var i=0; i<arr.length-1-end; i++){
        arr[start+i] = arr[end+1+i];
    }
    var count = (end-start) + 1 ; 
    arr.length = arr.length - count;
    return arr
}

x = [20,30,40,60,10]
console.log( range(x,0,2))