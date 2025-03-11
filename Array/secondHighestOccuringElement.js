class Solution {
  secondMostFrequentElement(nums) {
    let freqMap = {};
    let highestFreq = 0;
    let secondHighestFreq = 0;
    let minElement = Infinity;

    // Count frequencies
    for (let num of nums) {
      freqMap[num] = (freqMap[num] || 0) + 1;
    }

    for (let freq of Object.values(freqMap)) {
      if (freq > highestFreq) {
        secondHighestFreq = highestFreq;
        highestFreq = freq;
      } else if (freq > secondHighestFreq && freq < highestFreq) {
        secondHighestFreq = freq;
      }
    }

    // Find the smallest element with max frequency
    for (let num in freqMap) {
      if (freqMap[num] === secondHighestFreq) {
        minElement = Math.min(minElement, Number(num));
      }
    }

    return minElement === Infinity ? -1 : minElement;;
  }
}
