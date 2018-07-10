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


# Given a string s, print reverse of string and remove the characters from the reversed string where there are vowels in the original string.

# Examples:

# Input : geeksforgeeks
# Output : segrfseg
# Explanation :
# Reversed string is skeegrofskeeg, removing characters 
# from indexes 1, 2, 6, 9 & 10 (0 based indexing),
# we get segrfseg .

# Input :duck
# Output :kud

def reverseStringAfterRemovingVowels(s):
  str2 = ""
  str3 = ""
  for i in range((len(s)-1),-1,-1):
    str2 += (s[i])
  print(str2)

  for i in range(len(str2)):
    if(not vowels(s[i])):
      str3 += str2[i]
  return str3


def vowels(a):
  return (a == "a" or a == "e" or a == "o" or a == "u" or a == "i")

print(reverseStringAfterRemovingVowels("geeksforgeeks"))