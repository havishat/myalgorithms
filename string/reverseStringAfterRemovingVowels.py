def reverseStringAfterRemovingVowels(s):
  str2 = ""
  str3 = ""
  for i in range((len(s)-1),-1,-1):
    str2 += (s[i])
  print(str2)

  for i in range(len(str2)):
    if(not vowels(str2[i])):
      str3 += str2[i]
  return str3


def vowels(a):
  return (a == "a" or a == "e" or a == "o" or a == "u" or a == "i")

print(reverseStringAfterRemovingVowels("geeksforgeeks"))