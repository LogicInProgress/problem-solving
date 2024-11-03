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
            // Remove this because taking longer runtime because of conditional operator
            // hours += Math.floor(n / speed) + (n % speed !== 0 ? 1 : 0);

            // Calculate hours needed for each pile with the current speed
            hours += Math.floor((n + speed - 1)/ speed);
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
