class Solution:
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        start = 0
        end = len(s) - 1

        while(start < end):
            if(not isAlpha(s[start])):
                start = start + 1
                continue

            if(not isAlpha(s[end])):
                end = end - 1
                continue

            if(s[start].lower() != s[end].lower()):
                return False

            start = start + 1
            end = end - 1
        return True

def isAlpha(a):
        if ((a >= "a" and a <= "z") or (a >= "A" and a <= "Z") or (a >= '0' and a <= '9')):
            return True
        else:
            return False



# def isNum(a):
#         if(a >= '0' and a <= '9'):
#             return True
#         else:
#             return False

if __name__ == "__main__":
    print "welcome to python"
    s = Solution()
    print s.isPalindrome("madam")
    print s.isPalindrome("miss")
    print s.isPalindrome("m")
    print s.isPalindrome("A man, a plan, a canal: Panama")
    print s.isPalindrome("race a car")
    print s.isPalindrome("0P")