function MoveZerosToLeft(a){
    if(a.length < 1){
      return
    }
    let length = a.length;
    let read = length - 1;
    let write = length - 1;
  
    while(read >= 0){
      if(a[read] != 0){
        a[write] = a[read]
        write--
      }
      read--
    }
  
    while(write >= 0){
      a[write] = 0;
      write -= 1;
    }
  
  }
  
  let v = [1, 10, -1, 11, 5, 0, -7, 0, 25, -35];
  console.log("Original Array: ["+v+"]");
  MoveZerosToLeft(v);
  console.log("After Moving Zeros: ["+v+"]");