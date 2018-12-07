# Given two strings s and t , write a function to determine if t is an anagram of s.

# Example 1:

# Input: s = "anagram", t = "nagaram"
# Output: true
# Example 2:

# Input: s = "rat", t = "car"
# Output: false

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if(len(s) != len(t)):
            return False
        
        Newdict = {}
        
        for i in range(len(s)):
            if(s[i] in Newdict):
                Newdict[s[i]] += 1
            else: Newdict[s[i]] = 1
        
        for j in range(len(t)):
            if(t[j] in Newdict):
                Newdict[t[j]] -= 1
        
        for c in Newdict:
            if(Newdict[c] > 0):
                return False
        
        return True





class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        myList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        
        for i in myList:
            if s.count(i) != t.count(i):
                return False
            
        return True 