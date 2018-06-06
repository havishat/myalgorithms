function array(arr){
    var arr2  = [];
    var tempmult = 1;
    for(var i = 0; i<arr.length;i++){
        console.log(arr[i])
        tempmult *= arr[i]
    }

    console.log(tempmult)

    for(var j = 0; j<arr.length;j++){
        // console.log(arr[j])
        arr2.push(((tempmult)/arr[j]))
    }
    return arr2
}

console.log(array([2,-1,3]))