# Given two arrays, write a function to compute their intersection.

# Example 1:

# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2,2]
# Example 2:

# Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# Output: [4,9]

class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        newdict = {}
        y = []
        for i in range(len(nums1)):
            if(not(nums1[i] in newdict)):
                newdict[nums1[i]] = 1
            else: 
                newdict[nums1[i]] += 1

        for j in range(len(nums2)):
            if( nums2[j] in newdict):
                y.append(nums2[j])
                newdict[nums2[j]] -= 1

                if( newdict[nums2[j]] == 0):
                    del newdict[nums2[j]]
        return y 