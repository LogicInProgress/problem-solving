class Solution {
  isArmstrong(n) {
      let numbersArray = [];
      let tempIntial = n;

      while (tempIntial > 0) {
          let tempN = tempIntial % 10;

          numbersArray.push(tempN);

          tempIntial = Math.floor(tempIntial/10);
      }

      let numberCount = numbersArray.length;
      let count = 0;

      for (let i = 0; i < numberCount; i++) {
          count = count + (numbersArray[i] ** numberCount);
      }

      return n == count;
  }
}
