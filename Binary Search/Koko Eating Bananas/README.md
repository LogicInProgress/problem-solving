# Koko Eating Bananas - LeetCode Solution

Koko loves to eat bananas and has several piles of bananas represented by an array `piles`, where each element indicates the number of bananas in that pile. Given `h` hours to finish all piles, the task is to find the minimum eating speed `k` (bananas per hour) such that Koko can consume all the bananas within `h` hours. If the eating speed is too low, Koko won't finish in time; if it's too high, it might not be optimal.

## Solution Overview

To solve this problem, I used a **binary search approach** on the possible range of speeds, from `1` banana per hour to the maximum pile size (`max(piles)`). This approach efficiently narrows down the minimum eating speed `k` to finish within `h` hours.

### Key Concepts
- **Binary Search**: By applying binary search on the speed range, we can reduce the problem's time complexity.
- **Helper Function (`hoursRequired`)**: This function calculates the total hours Koko would need to eat all piles at a given speed. Instead of using conditionals, it leverages an optimized formula to round up without branching logic.

### Code

```javascript
/**
 * Finds the minimum eating speed required for Koko to eat all banana piles within `h` hours.
 * 
 * @param {number[]} piles - Array where each element represents a pile of bananas.
 * @param {number} h - Maximum hours available to eat all piles.
 * @return {number} - Minimum eating speed required to finish all piles within `h` hours.
 * 
 * Leetcode: https://leetcode.com/problems/koko-eating-bananas/
 */
var minEatingSpeed = function (piles, h) {
    // Determine the search range for eating speed
    let maxValue = Math.max(...piles);  // Max pile size is the upper bound for speed
    let L = 1;  // Minimum possible speed
    let ans = -1;

    /**
     * Helper function to calculate the total hours required to eat all piles
     * at a specific speed.
     * 
     * @param {number} speed - Speed of eating bananas (bananas per hour).
     * @param {number[]} piles - Array of banana piles.
     * @return {number} - Total hours needed to eat all piles at the given speed.
     */
    function hoursRequired(speed, piles) {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.floor((pile + speed - 1) / speed);
        }
        return hours;
    }

    // Binary search to find the minimum speed that allows Koko to finish in `h` hours
    while (L <= maxValue) {
        let mid = Math.floor((L + maxValue) / 2);  
        let totalHoursRequired = hoursRequired(mid, piles);

        if (totalHoursRequired <= h) {
            ans = mid;          // Potential answer, try a lower speed
            maxValue = mid - 1;  
        } else {
            L = mid + 1;        // Increase speed to reduce total hours
        }
    }

    return ans;
};
```

### Explanation

1. **Binary Search Initialization**:
   - We set the range for possible speeds as `[1, max(piles)]` since the minimum speed must be at least `1`, and the maximum speed cannot exceed the largest pile size (eating all bananas in one hour).

2. **Helper Function (`hoursRequired`)**:
   - `hoursRequired` calculates the total hours Koko would need to eat all piles at a given speed. It uses `Math.floor((pile + speed - 1) / speed)` to achieve ceiling division without conditionals, optimizing performance by avoiding unnecessary branching.

3. **Binary Search Execution**:
   - During each iteration, we check if the current speed (`mid`) allows Koko to finish within `h` hours. If yes, we record it as a potential answer and try a lower speed; otherwise, we increase the speed.

4. **Returning the Result**:
   - Once the loop completes, `ans` holds the minimum speed at which Koko can finish all piles within the time limit.

### Complexity Analysis
- **Time Complexity**: `O(n log m)`, where `n` is the number of piles and `m` is the maximum pile size. This is due to binary search (`log m`) on the speed range and the linear scan through piles to calculate `hoursRequired`.
- **Space Complexity**: `O(1)`, as the space used is constant and only dependent on input.

### Edge Cases
- **Single Pile**: When there’s only one pile, Koko’s speed will be equal to the pile size.
- **Small `h` Values**: When `h` is small, Koko may need a high eating speed, approaching the maximum pile size.
- **Large `h` Values**: If `h` is large, Koko can eat slowly, closer to the minimum speed of `1`.

## References
- [LeetCode Problem - Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
