class Data:
  def __init__(self, val, preI, sufI):
    self.val = val
    self.preIndex = preI
    self.nextIndex = sufI

def findWordInRecording(rData, word, context):
  #Get the word from the recording data list
  currentWordIndex = findWordIndex(rData, word)
  #Return empty string if word is not found
  if currentWordIndex is -1:
    return " "
  currentWord = rData[currentWordIndex]
  words = [currentWord.val]
  i = 0
  #For Previous Words
  while i < context:
    prevWordIndex = currentWord.preIndex
    #If the previous Word Index is -1, end here
    if prevWordIndex == -1:
      break
    prevWord = rData[prevWordIndex]
    #Insert the previous word in the beginning
    print "adding previous word", prevWord.val
    words.insert(0, prevWord.val)
    currentWord = prevWord
    i += 1
  #For Next Words
  currentWord = rData[currentWordIndex]
  j = 0
  while j < context:
    nextWordIndex = currentWord.nextIndex
     #If the next Word Index is -1, end here
    if nextWordIndex == -1:
      break
    nextWord = rData[nextWordIndex]
    #Insert the next word at the end
    words.append(nextWord.val)
    currentWord = nextWord
    j += 1
  return ' '.join(words)

#Finds the currentword in the recording data list
def findWordIndex(rData, word):
  for i in range(0,len(rData)):
    data = rData[i]
    if data.val == word:
      return i
  return -1

#Initialize the test data
def initializeData():
  rData = []
  data1 = Data("sample", 1, 7)
  rData.append(data1)
  data1 = Data("a", 3, 0)
  rData.append(data1)
  data1 = Data("This", -1, 3)
  rData.append(data1)
  data1 = Data("is", 2, 1)
  rData.append(data1)
  data1 = Data("problem.", 9, 11)
  rData.append(data1)
  data1 = Data("be", 11, 6)
  rData.append(data1)
  data1 = Data("something", 5, 8)
  rData.append(data1)
  data1 = Data("recording", 0, 10)
  rData.append(data1)
  data1 = Data("else", 6, 12)
  rData.append(data1)
  data1 = Data("the", 13, 4)
  rData.append(data1)
  #There is a bug in the sample data for the word "to"
  #Fixed it below
  data1 = Data("to", 7, 13)
  rData.append(data1)
  data1 = Data("Can", 4, 5)
  rData.append(data1)
  data1 = Data("too.", 8, -1)
  rData.append(data1)
  data1 = Data("describe", 10, 9)
  rData.append(data1)
  return rData

if __name__ == "__main__":
  print "Welcome to python"
  rData = initializeData()
  result = findWordInRecording(rData, "problem.", 4)
  print result