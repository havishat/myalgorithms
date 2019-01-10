# Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

# You may assume that the array is non-empty and the majority element always exist in the array.

# Example 1:

# Input: [3,2,3]
# Output: 3
# Example 2:

# Input: [2,2,1,1,1,2,2]
# Output: 2

class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        c_dict = {}
        for i in range(len(nums)):
          if nums[i] in c_dict:
            c_dict[nums[i]] += 1
          else:
            c_dict[nums[i]] = 1
        print(c_dict)
        amax = 0
        for i in c_dict:
          # print(c_dict[i])
          if c_dict[i] > amax:
            # print(amax)
            amax = c_dict[i]
        # print(amax)
        
        for i in c_dict:
          if amax == c_dict[i]:
            return i

        # nums.sort()
        # return nums[len(nums) // 2]

        count = 0
        m = nums[0]
        for i in range(len(nums)):
          if(m == nums[i]):
            count += 1
          else:
            count -= 1
            if(count < 0):
              m = nums[i]
              count = 0
        return m
        
        

        
obj = Solution()
print(obj.majorityElement([3,2,3]))