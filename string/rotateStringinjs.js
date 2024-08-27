var rotateString = function(s, goal) {
  if (s.length != goal.length) {
    return false;
  }

  if (s.length == 0) {
    return true;
  }

  for (var i = 0; i < s.length; i++) {
    var reverseStringVariable = ""
      reverseStringVariable = goal.charAt(goal.length - 1) + goal.substring(0, goal.length - 1);
    goal = reverseStringVariable;
     reverseStringVariable = "";
    if (goal == s) {
      return true
    }
  }
  return false
}

console.log(rotateString("abc", "bac"));


