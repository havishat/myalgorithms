def Solution(A):
  print "original array", A
  B = [0] * len(A)
  minSoFar = A[len(A)-1]
  for x in range(len(A)-1,-1,-1):
    if minSoFar > A[x]:
      minSoFar = A[x]
    B[x] = minSoFar
  print "least num array", B
  num = B[0]
  slices = 0
  for y in range(len(B)):
    if B[y] != num:
      slices = slices + 1
      num = B[y]
  #Last slice needs to be updated
  slices = slices + 1
  print "Total slices", slices



if __name__ == "__main__":
  print "Welcome to python !!"
  A = [2, 1, 0, 3]
  #A = [2, 1, 0, 3, 4, 5]
  #A = [2,4,1,6,5,9,7]
  #A = [4,3,2,6,1]
  #A = [2,1,6,4,3,7]
  #A = [1,2,3,4,5,6,7]
  Solution(A)


  
// second problem 
def solution(A):
    # write your code in Python 3.6
    endOfArray = False
    slices = 0
    st = 0
    end = len(A) - 1
    while not endOfArray and st <= end:
        d = getMinMax(A, st, end)
        for x in range(st, end+1):
            #check if max occurs first
            if A[x] == d[1]:
                slices = slices + 1
                endOfArray = True
                break
            if A[x] == d[0]:
                slices = slices + 1
                st = x + 1
                break
    print slices

def getMinMax(A, st, end):
    min = A[st]
    max = A[st]
    for x in range(st, end+1):
        if min > A[x]:
            min = A[x]
        if max < A[x]:
            max = A[x]
    dict = {}
    dict[0] = min
    dict[1] = max
    return dict

if __name__ == "__main__":
  A = [2,4,1,6,5,9,7]
  A = [4,3,2,6,1]
  A = [2,1,6,4,3,7]
  A = [1,2,3,4,5,6,7]
  solution(A)