var rotate = function(arr, offset){
    console.log("shift values to right by offset!");
    for(var i = arr.length - 1; i >=0; i--){
        arr[i+offset] = arr[i];
        arr[i] = undefined;
        console.log("arr=",arr);
    }
    console.log("wrapp the values at the end");
    for(var i =0; i < offset; i++){
        arr[i] = arr[arr.length - offset + i];
        console.log(arr);
    }
    arr.length -= offset;
};

var arr = [1,2,3,4,5,6,7,8,9];

rotate(arr,3);
console.log("arr=",arr);
