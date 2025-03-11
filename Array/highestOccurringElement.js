class Solution {
  mostFrequentElement(nums) {
    let freqMap = {};
    let maxFreq = 0;
    let minElement = Infinity;

    // Count frequencies
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, freqMap[num]);
    }

    // Find the smallest element with max frequency
    for (let num in freqMap) {
        if (freqMap[num] === maxFreq) {
            minElement = Math.min(minElement, Number(num));
        }
    }

    return minElement;
  }
}
