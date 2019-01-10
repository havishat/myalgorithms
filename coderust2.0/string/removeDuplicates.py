# Remove duplicate characters from a string.

def remove_duplicates(str):
 #TODO: Write - Your - Code
  mydict = {}
  strr2 = ""
  for i in range(len(str)):
    if str[i] not in mydict:
      mydict[str[i]] = 1

  for i in range(len(str)):
    if str[i] in mydict:
      mydict[str[i]] -= 1
    
    if mydict[str[i]] == 0:
      strr2 += str[i]
  
  return strr2

print(remove_duplicates("Hello World!"))


# this solution uses extra memory
# to keep all characters present in string.

# Null terminating strings are not used in Java.
# For this question, assume that you are passed a
# null terminated string (array of characters).
# def remove_duplicates_1(s):
  
#   hashset = set([])
#   write_index = 0
#   read_index = 0

#   while s[read_index] != '\0':
#     if s[read_index] not in hashset:
#       hashset.add(s[read_index])
#       s[write_index] = s[read_index]
#       write_index += 1

#     read_index += 1

#   s[write_index] = '\0'
  
# def getArray(t):
#   s = array('c', t)
#   s.append('\0')
#   return s

# def print_array(s):
#   i = 0
#   result = ""
#   while s[i] != '\0':
#     result += s[i]
#     i += 1
#   print result

# def are_equal(s1, s2):
#   if s1 == None and s2 == None:
#     return True

#   if s1 == None or s2 == None:
#     return False

#   i = 0
#   j = 0
#   while i < len(s1) and j < len(s2):
#     if s1[i] == '\0' and s2[j] == '\0':
#       return True

#     if s1[i] != s2[j]:
#       return False

#     i += 1
#     j += 1

#   return False  
  
# def test(s):
#   print "Before: " + str(s)
#   temp1 = getArray(s)
#   remove_duplicates_1(temp1)
#   print "After: ",
#   print_array(temp1)

# # Test Program.
# def main():
#   test("aabbccddefffgfijk")
#   test("Hello World!")
#   test("  Quick brown fox jumped   over lazy   dog           ")
#   test("aaaaaaaaaaa")
#   test("aaaaaaaaaaabbbbbbbb")

# main()  

# this solution does not require any extra memory
# but runs in O(n^2) time

# Null terminating strings are not used in Java.
# For this question, assume that you are passed a
# null terminated string (array of characters).
def remove_duplicates_2(str):
  write_index = 0
  
  for i in range(len(str)):
    found = False
    
    for j in xrange(0, write_index):
      if str[i] == str[j]:
        found = True
        break

    if found == False:
      str[write_index] = str[i]
      write_index += 1

  str[write_index] = '\0'
  
def getArray(t):
  s = array('c', t)
  s.append('\0')
  return s

def print_array(s):
  i = 0
  result = ""
  while s[i] != '\0':
    result += s[i]
    i += 1
  print result

def are_equal(s1, s2):
  if s1 == None and s2 == None:
    return True

  if s1 == None or s2 == None:
    return False

  i = 0
  j = 0
  while i < len(s1) and j < len(s2):
    if s1[i] == '\0' and s2[j] == '\0':
      return True

    if s1[i] != s2[j]:
      return False

    i += 1
    j += 1

  return False  
  
def test(s):
  print "Before: " + str(s)
  temp1 = getArray(s)
  remove_duplicates_2(temp1)
  print "After: ",
  print_array(temp1)

# Test Program.
def main():
  test("aabbccddefffgfijk")
  test("Hello World!")
  test("  Quick brown fox jumped   over lazy   dog           ")
  test("aaaaaaaaaaa")
  test("aaaaaaaaaaabbbbbbbb")

main()  