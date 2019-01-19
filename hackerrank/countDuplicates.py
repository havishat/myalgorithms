def countDuplicates(numbers):
    # Write your code here

    count = 0
    mydict = {}

    for i in range(len(numbers)):
      if(not(numbers[i] in mydict)):
        mydict[numbers[i]] = 1
      else: 
        mydict[numbers[i]] += 1
    print(mydict)

    # for i in range(len(numbers)):
    for i in mydict:
      if mydict[i] > 1:
        count += 1
        
    
    return count
    

print(countDuplicates([1,3,1,4,5,6,3,2]))