function nthnumber(arr,n){
    arr.sort();
    var nth = 1; 
    for(var i = arr.length-1; i>0; i--){
        if(arr[i]>arr[i-1]){
            nth++; 
            if(nth == n){
                return arr[i];
            }
        }
    }
    return null
}

x = [2,5,8,2,4]
console.log( nthnumber(x,3))