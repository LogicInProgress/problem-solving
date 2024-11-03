/**
 * Finds the peak index in a mountain array.
 * 
 * A mountain array is an array where elements increase to a peak and then decrease.
 * This function returns the index of the peak element.
 * 
 * @param {number[]} arr - Mountain array where we need to find the peak index.
 * @return {number} - Index of the peak element.
 * 
 * LeetCode: https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */
var peakIndexInMountainArray = function (arr) {
  let L = 0, R = arr.length - 1;

  while (L <= R) {
      let mid = Math.floor((L + R) / 2);

      // If mid element is greater than its neighbors, it's the peak
      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

      // If middle element is part of the increasing slope, move left bound up
      if (arr[mid] < arr[mid + 1]) {
          L = mid + 1;
      } else {
          // Otherwise, it's part of the decreasing slope, move right bound down
          R = mid - 1;
      }
  }
};
