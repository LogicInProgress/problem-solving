# Peak Index in a Mountain Array - LeetCode Solution

A mountain array is defined as an array where elements strictly increase to a single peak, and then strictly decrease. Given a mountain array `arr`, the task is to find the index of the peak element (the highest element where elements increase before it and decrease after it).

### Key Concepts
- **Binary Search**: By applying binary search on the array, we can reduce the search space for the peak, taking advantage of the array’s structure.
- **Peak Identification**: At each midpoint, if the middle element is greater than its neighbors, it's identified as the peak. If not, the search continues based on whether the slope is increasing or decreasing.

### Code

```javascript
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

    // Binary search for the peak
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
```

### Explanation

1. **Binary Search Initialization**:
   - The bounds for the binary search are set as `L = 0` and `R = arr.length - 1`.

2. **Peak Identification**:
   - For each midpoint (`mid`), the function checks if `arr[mid]` is greater than both its neighbors (`arr[mid - 1]` and `arr[mid + 1]`). If so, `mid` is the peak index.
   - If `arr[mid]` is part of the increasing slope, the peak lies to the right, so `L` is updated to `mid + 1`.
   - Otherwise, the peak lies to the left, and `R` is updated to `mid - 1`.

3. **Return the Peak Index**:
   - The function returns the `mid` index as soon as it identifies the peak.

## References
- [LeetCode Problem - Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)
