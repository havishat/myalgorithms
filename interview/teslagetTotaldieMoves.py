def solution(A):
    # write your code in Python 3.6
    if len(A) == 0 or len(A) == 1:
        return 0
    min = -1
    for a in range(1,7):
        if a not in A:
            continue
        b = getTotalMoves(A, a)
        if min == -1 or min > b:
            min = b
    #print min
    return min
    
    
def getTotalMoves(A, faceValue):
    #Saving the opposite face value in dict, which takes two steps to get that value
    dict = {1:6, 6:1, 5:2, 2:5, 3:4, 4:3}
    totalMoves = 0
    for x in range(len(A)):
        if A[x] == faceValue:
            continue
        else:
            oppositeFace = dict[A[x]]
            if faceValue == oppositeFace:
                totalMoves = totalMoves + 2
            else:
                totalMoves = totalMoves + 1
    return totalMoves

if __name__ == "__main__":
  #A = [2,3,5,5,4,4,1,6,5,3]
  A = [1,2,3]
  #A = [1,1,6]
  #A = [1,6,2,3]