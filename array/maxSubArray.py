def maxSubArray(arr):
  max_so_far = 0
  max_end_here = 0

  for i in range(len(arr)):
    max_end_here = max_end_here + arr[i]
    
    if(max_end_here < 0):
      max_end_here = 0
    elif(max_end_here > max_so_far):
      max_so_far = max_end_here

  return max_so_far

print(maxSubArray([-5,6,7,1,4,-8,16]))