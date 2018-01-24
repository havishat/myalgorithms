function removeDuplicate(arr){
    pos = 0;

    for(var i = 1; i < arr.length; i++)
    {
        if(arr[pos]==arr[i])
            arr[i]= undefined;
        else{
            pos++;
            arr[pos] = arr[i];
            arr[i]=undefined;
        }
    }
    arr.length = pos + 1;
}

var arr = {Alex, Alex, Bob, Bob, Christine, Diane, Diane, Diane};

removeDuplicate(arr);

console.log(arr);