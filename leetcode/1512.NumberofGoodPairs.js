// JavaScript source code
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    count = 0;
    j = nums.length - 1;
    i = 0;
    while (i < j) {
        if (nums[i] == nums[j]) {
            count++
            j--
            console.log(j)
        } else {
            j--
        }

        if (i == j) {
            i++
            j = nums.length - 1
        }

    }
    return count
};
