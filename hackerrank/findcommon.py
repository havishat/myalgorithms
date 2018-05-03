def findcommon(a,b):
    tempDict = {}
    y = " "
    for i in range(0, len(a)):
        tempDict[a[i]] = 1 
    
    for j in range(0, len(b)):
        if (b[j]) in tempDict:
            y += (b[j])
        
    return y
print(findcommon("abc","bc"))