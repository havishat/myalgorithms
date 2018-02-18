var result = ' x   ';

function buff(val){
  var buff = '';
  var pad = 4 - val;
    while( pad-- > 0 )
            buff += ' ';            
  return buff;
  console.log(buff)
}

for (var i = 0; i <= 12; i++) {

    for (var j = 0; j <= 12; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']' + buff((j+'').length+2);
        } 
        else if(j == 0 && i>0){
          result += '[' + i + ']';
        } 
        else if(i>0 && j>0){
        result += buff((i*j+'').length) + i*j;
        }
    }
    result += '\n'
}

console.log(result)