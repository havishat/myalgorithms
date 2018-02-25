// function removeD(arr) {
//     var newarr = {}
//     var r = []
//     for(var i=0; i<arr.length; i++){
//         console.log(arr[i])
//         newarr[arr[i]] = null
//     }
    
//     console.log(newarr)
//     for(i in newarr) {
//         r.push(i)
//     }
//     return r
// }


function removeD(arr) {
    var newdict = {}
    var x = 0;
    // var r = []
    for(var i=0; i<arr.length; i++){
     if (!(arr[i] in newdict)) {
       newdict[arr[i]] = true;
       arr[x] = arr[i];
       x++;
     }
    }
    // console.log(x)
    // console.log(17 - (17-12))
    // arr.length = arr.length-(arr.length-x)
    arr.length = x;
    return arr
    }
console.log(removeD([1,10,2,11,20,3,1,4,5,7,3,11,9,8,10,21,2]))