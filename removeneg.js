function removeneg(arr){
    pos = 0;

    for(var i = 1; i < arr.length; i++)
    {
        if(arr[i]<0)
            arr[i]= undefined;
        else{
            pos++;
            arr[pos] = arr[i];
            arr[i]=undefined;
        }
    }
    arr.length = pos + 1;
}

var arr = [1,-2,3,-64,4];

removeneg(arr);

console.log(arr);