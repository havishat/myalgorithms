#Medium:
##A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0,and 128 % 8 == 0.

#Also, a self-dividing number is not allowed to contain the digit zero.

#Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.


def selfDriveingNumber(left, right):
  array = []
  for i in range(left, right+1):
    if(isMagicNumber(i)):
      array.append(i)
  
  return array

def isMagicNumber(a):
  num = a
  while(num != 0):
    n = num%10
    if (n != 0 and a%n != 0):
      return False
    num = num // 10

  return True

print(selfDriveingNumber(1,22))