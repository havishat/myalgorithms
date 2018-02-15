process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////


function leftrotation(a, k) {
    var new_arr = []
    for(var i =0 ; i < a.length; i++) {
        var new_index = (i + k) % a.length;
        new_arr[i] = a[new_index]
    }
    return new_arr.join(" ")

};

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var result = leftrotation(a,k);
    console.log(result)

}
