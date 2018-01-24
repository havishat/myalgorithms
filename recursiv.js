function permute(input){
    function permutation(arr, position){
        if(position >= arr.length) {
            results.push(arr);
        } else {
            permutation(arr, position+1); // nothing is swapped, no need to copy anything
                                          // you can also omit this line and start i=position
            for (var i=position+1; i<arr.length; i++) {
                var tmp = arr.slice();
                tmp[position] = arr[i];
                tmp[i] = arr[position];
                permutation(tmp, position+1);
            }
        }
    };
    var results = [];
    permutation(input, 0);
    return results;
};

console.log(permute([1,2,,3]));