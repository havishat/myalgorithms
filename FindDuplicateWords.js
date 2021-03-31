function findDuplicates(str) {
  const dupes = [];
  // fill in
  splits = str.toLocaleLowerCase().split(' ')
  console.log(splits)

  occurrences = {}

  for(var i=0; i<splits.length; i++){
    if(splits[i] in occurrences){
          occurrences[splits[i]] += 1
    }
    else{
      occurrences[splits[i]] = 1
    }

  }

  console.log(occurrences)

  for(word in occurrences){
    if(	occurrences[word] >= 2){
      dupes.push(word)
    }
  }
  return dupes

}

console.log(findDuplicates('The dog is the best'))
