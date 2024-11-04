# Find First and Last Position of Element in Sorted Array

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given target value.

If the target is not found in the array, return `[-1, -1]`.

### Example

```plaintext
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

## Complexity Analysis

- **Time Complexity**: `O(log n)` due to binary search for both the first and last positions.
- **Space Complexity**: `O(1)` since no additional space is required other than a few variables.
