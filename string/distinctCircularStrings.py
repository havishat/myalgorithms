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