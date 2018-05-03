def bs(a,key):
    low = 0
    high = len(a) - 1
    while(low <= high):
      mid = low + (high-low)/2
      if(a[mid] == key):
        return mid
      if(key<a[mid]):
        high = mid - 1
      else:
        low = mid + 1
    return -1
  
print(bs([1,10,20,47,59,63],20))