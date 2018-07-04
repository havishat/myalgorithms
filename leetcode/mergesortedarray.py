

class Solution:
  def mergesortedarray(self, A, B):
    c = []
    j = 0
    i = 0

    while(i<len(A) and j<len(B)):
      if(A[i] > B[j]):
        c.append(B[j])
        j = j + 1
      else:
        c.append(A[i])
        i = i + 1
    while(j<len(B)):
      c.append(B[j])
      j = j + 1

    while(i<len(A)):
      c.append(A[i])
      i = i + 1
    return c

obj = Solution()
print(obj.mergesortedarray([2,3,5,8],[1,4,6,7,9]))