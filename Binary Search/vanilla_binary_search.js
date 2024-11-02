/**
 * Performs binary search on a sorted array to find the target's index.
 * 
 * @param {number[]} nums - A sorted array of integers.
 * @param {number} target - The integer value to search for.
 * @return {number} - The index of the target if found, otherwise -1.
 * 
 * Leetcode: https://leetcode.com/problems/binary-search/
 */
var search = function (nums, target) {
    // Initialize pointers for the left and right bounds of the search range
    let L = 0, R = nums.length - 1;

    // Continue searching while the range is valid
    while (L <= R) {
        // Calculate mid to avoid potential overflow
        let mid = L + Math.floor((R - L) / 2);

        // Check if mid is the target
        if (nums[mid] === target) {
            return mid;
        }
        // If target is greater than mid, narrow the range to the right half
        else if (nums[mid] < target) {
            L = mid + 1;
        }
        // If target is less than mid, narrow the range to the left half
        else {
            R = mid - 1;
        }
    }

    // Return -1 if target is not found in the array
    return -1;
};
