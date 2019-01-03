# Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:

# It is a concatenation of one or more words consisting of English letters.
# All letters in the first word are lowercase.
# For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
# Given , print the number of words in  on a new line.

# For example, . There are  words in the string.

# Function Description

# Complete the camelcase function in the editor below. It must return the integer number of words in the input string.

# camelcase has the following parameter(s):

# s: the string to analyze
# Input Format

# A single line containing string .

# Constraints

# Output Format

# Print the number of words in string .

# Sample Input

# saveChangesInTheEditor
# Sample Output

# 5
# Explanation

# String  contains five words:

# save
# Changes
# In
# The
# Editor
# Thus, we print  on a new line.

#!/bin/python

import math
import os
import random
import re
import sys

# Complete the camelcase function below.
def camelcase(s):
    count = 1
    for i in range(len(s)):
        if(s[i].isupper()):
            count += 1
    
    return count

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = raw_input()

    result = camelcase(s)

    fptr.write(str(result) + '\n')

    fptr.close()
