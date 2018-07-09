def stringrotate(str1,str2):
  if(len(str1) != len(str2)):
    return False
  
  str3 = str1 + str1
  print(str3)
  i = 0
  j = 0

  while(i<len(str3) and j<len(str2)):
    if(str3[i] != str2[j]):
      i = i + 1
    elif(j == (len(str2) - 1)):
      # print(len(str2) - 1)
      if(str3[i] == str2[j]):
        return True
    elif(str3[i] == str2[j]):
      i = i + 1
      j = j + 1

  return False

print(stringrotate("Tom","omT"))