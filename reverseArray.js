function reverseArray(arr){
    if(!arr){
        return arr
    }

    back = arr.length - 1
    front = 0

    while(front < back){
        swap(arr, front, back)
        front++
        back--
    }
    return arr
}

function swap(arr, front, back){
    temp = arr[front]
    arr[front] = arr[back]
    arr[back] = temp
}

console.log(reverseArray([1,2,3,5,7]))