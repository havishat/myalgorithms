# Print all distinct circular strings of length M in lexicographical order
# Given a string and an integer M, print all distinct circular strings of length M in lexicographical order.

# Examples:

# Input: str = “baaaa”, M = 3
# Output: aaa aab aba baa
# All possible circular substrings of length 3 are “baa” “aaa” “aaa” “aab” “aba”
# Out of the 6, 4 are distinct, and the lexicographical order is aaa aab aba baa

# Input: str = “saurav”, M = 3
# Output: aura avsa ravs saur urav vsau
# All possible circular substrings of length 4 are saur aura urav ravs avsa vsau.
# All the substrings are distinct, the lexicographical order is aura avsa ravs saur urav vsau.

def distrinctCircleString(s, m):
  l = len(s)
  s2 = s + s
  res = []
  print(s2)
  for i in range(l):
    s3 = s2[i:i+m]
    if s3 not in res:
      res.append(s3)
  print(res)

# obj = Solution()
distrinctCircleString("baaaa", 3)