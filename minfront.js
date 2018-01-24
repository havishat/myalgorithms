function minfront(arr){
    var min = arr[0];
    var x;
    for(var i = 1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
            x = i;
        }
    }
    for(var i = x; i> 0; i--){
        arr[i] = arr[i-1];}
    arr [0] = min;
    return console.log(arr);
}

y = [4,2,1,3,5];
minfront(y);