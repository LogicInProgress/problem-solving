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
    let L = 1;  // Lower bound for speed (can't be 0, as she needs to eat at least 1 banana per hour)
    let ans = -1;  // Initialize answer to an invalid state

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
        for (let n of piles) {
            // Calculate hours needed for each pile with the current speed
            hours += Math.floor(n / speed) + (n % speed !== 0 ? 1 : 0);
        }
        return hours;
    }

    // Binary search to find the minimum speed that allows Koko to finish in `h` hours
    while (L <= maxValue) {
        let mid = Math.floor((L + maxValue) / 2);  // Middle point as potential speed
        let totalHoursRequired = hoursRequired(mid, piles);  // Hours needed at `mid` speed

        if (totalHoursRequired <= h) {
            // If she can finish within `h` hours at this speed, it's a potential answer
            ans = mid;
            maxValue = mid - 1;  // Try to find a lower speed that still works
        } else {
            // Otherwise, increase the speed to reduce time required
            L = mid + 1;
        }
    }

    return ans;  // Return the minimum speed found
};
