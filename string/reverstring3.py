def reverstring(str1):
  str2 = ""
  reverse = ""
  for i in reversed(range(len(str1))):
    str2 += str1[i]
  print str2
  k = 0
  j = 0
  temp = 0
  while(j < len(str2)):
    temp = j
    if(str2[j] == "."):
      reverse = reverse + str2[j]
      print j
      j = j + 1
    elif (str2[j] == " "):
      reverse += str2[j]
      print j
      j = j + 1
    else : 
      while(str2[j] != " " and str2[j] != "."):
        k = k + 1
        if(k == len(str2)):
          break
      temp = temp - 1
      reverse += str2[temp]
      
      j = k
  print reverse

print reverstring("I love microsoft.")