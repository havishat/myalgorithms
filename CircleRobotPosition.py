#Easy: Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

#The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R(Right), L(Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

def CircleRobotPosition(string):
  countUD = 0
  countRL = 0
  for i in range(len(string)):
    
    if(string[i] == "U"):
      countUD += 1
    elif(string[i] == "D"):
      countUD -= 1
    elif(string[i] == "L"):
      countRL += 1
    elif(string[i] == "R"):
      countRL -= 1
    
  if( (countUD == 0) and (countRL == 0)):
    return True
  else:
    return False
  
print(CircleRobotPosition("UUD"))