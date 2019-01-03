# Given a pattern and a string str, find if str follows the same pattern.

# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

# Example 1:

# Input: pattern = "abba", str = "dog cat cat dog"
# Output: true
# Example 2:

# Input:pattern = "abba", str = "dog cat cat fish"
# Output: false
# Example 3:

# Input: pattern = "aaaa", str = "dog cat cat dog"
# Output: false
# Example 4:

# Input: pattern = "abba", str = "dog dog dog dog"
# Output: false



class Solution(object):
    def wordPattern(self, pattern, str):
        """
        :type pattern: str
        :type str: str
        :rtype: bool
        """
        words = str.split()
        sameword = []
    # print(words)
        if len(pattern) != len(words):
            return False
        Dict = {}
        for i in range(len(pattern)):
            pt = pattern[i]
          # print("pt", pt)
            stword = words[i]
          # print(stword)
            if pt in Dict :
            # print("hello")
                if words[i] != Dict[pt]:
                    return False
            else:
                if stword in sameword:
                    return False
                sameword.append(stword)
                Dict[pt] = stword
        # print(thisDict)
        return True