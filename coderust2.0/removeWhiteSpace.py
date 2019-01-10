def remove_white_spaces (s):
  #TODO: Write - Your - Code
  r = 0
  w = 0
  s2 = ""
  while(r < len(s)):
    if(s[r] != " "):
      s2 += s[r]
      # w += 1
    r += 1
  
  return s2
  
# def getArray(t):
#   s = array('c', t)
#   s.append('\0')
#   return s

# def print_array(s):
#   i = 0
#   while s[i] != '\0':
#     stdout.write(s[i])
#     i += 1
#   print

# def main():
#   s = getArray("Hello World!")
#   print_array(s)
#   remove_white_spaces (s)
#   print_array(s)

#   s = getArray("    Quick brown fox jumped   over lazy   dog           ")
#   print_array(s)
#   remove_white_spaces(s)
#   print_array(s)

# main() 

print(remove_white_spaces("   All greek  to    me.    "))