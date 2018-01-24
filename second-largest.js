function secondlargest(arr){
    if(arr.length<2){
        return null;
    }
    var first_largest = arr[0];
    var second_largest = arr[1];
    for(var i=1; i<arr.length;i++){
        if(arr[i]>first_largest){
            second_largest = first_largest;
            first_largest = arr[1];
        }
        else if(arr[i] > second_largest){
            second_largest = arr[1];
        }
    }
    return console.log( second_largest)
}

x = [-2,-4,-42,-7];
secondlargest(x)
