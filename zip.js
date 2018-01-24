// function zip(arr1,arr2){
//     var newArray=[];
//     var i = 0;
//     while(i<arr1.length || i<arr2.length){
//         if(arr1[i]){
//             newArray.push(arr1[i]);
//         }
//         if(arr2[i]){
//             newArray.push(arr2[i]);
//         }
//         i++
//     }
//     return newArray
// }

// x = [1,2]
// y=[5,8,10]

// console.log(zip(x,y))

function zip2(arr1,arr2){
    var total = arr1.length + arr2.length;
    var pos2 = arr2.length-1;
    var pos1 = arr1.length-1;
    for(i=total-1;i>=0; i-=2){
        if(pos1 == pos2){
            arr1[i] = arr2[pos2];
            arr1[i-1] = arr1[pos1];
            pos1 --;
            pos2 --;
        }

    }
    return arr1
}

z = [1,2]
z2=[3,7]
console.log(zip2(z,z2))
