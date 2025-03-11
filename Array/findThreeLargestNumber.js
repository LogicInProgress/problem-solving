class Solution {
  findThreeLargestNumber(nums) {
    let firstMaxNum = nums[0];
    let secondMaxNum = nums[0];
    let thirdMaxNum = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > firstMaxNum) {
        thirdMaxNum = secondMaxNum;
        secondMaxNum = firstMaxNum;
        firstMaxNum = nums[i];
      } else if (nums[i] > secondMaxNum) {
        thirdMaxNum = secondMaxNum;
        secondMaxNum = nums[i];
      } else if (nums[i] > thirdMaxNum) {
        thirdMaxNum = nums[i];
      }
    }

    return [firstMaxNum, secondMaxNum, thirdMaxNum]
  }
}




