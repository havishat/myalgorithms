# Given an array of  integers, can you find the sum of its elements?

# Input Format

# The first line contains an integer, , denoting the size of the array. 
# The second line contains  space-separated integers representing the array's elements.

# Output Format

# Print the sum of the array's elements as a single integer.

# Sample Input

# 6
# 1 2 3 4 10 11
# Sample Output

# 31
# Explanation

# We print the sum of the array's elements, which is: .

#!/bin/python3

import sys

def simpleArraySum(n, ar):
    # Complete this function
    thesum = 0
    for i in ar:
        thesum += i
    return thesum

# n = int(input().strip())
# ar = list(map(int, input().strip().split(' ')))
n = 6
ar = [1, 2, 3, 4, 10, 11]
result = simpleArraySum(n, ar)
print(result)