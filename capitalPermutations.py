
def capitalPermutations(s):
  result = []

  def helper(build, i):
    if i >= len(s):
      result.append(build)
      return
    #print(build)
    helper(build + s[i].upper(), i+1)
    helper(build + s[i].lower(), i+1)
    print(build)
  helper("", 0)
  return result

print(capitalPermutations("ab"))
