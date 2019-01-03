# find_sum_of_two_2 function return true if
# there are two values in array who
# sum to value and returns false otherwise
# this solution works only if data is sorted.
# does not require any extra memory.

def find_sum_of_two_2(A, val):
    i = 0
    j = len(A) - 1
    while i < j:
        s = A[i] + A[j]
        if s == val:
            return True
    
        if s < val:
            i += 1
        else:
            j -= 1
    
    return False

def test(v, val, expected):
  v = sorted(v)
  output = find_sum_of_two_2(v, val);
  print("exist2(A, " + str(val) + ") = " + str(output) + "\n")
  assert(expected == output)

def main():
  v = [2, 1, 8, 4, 7, 3]
  test(v, 3, True)
  test(v, 20, False)
  test(v, 12, True)
  test(v, 2, False)
  test(v, 7, True)

main()

