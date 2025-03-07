/*
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
*/

class Solution {
  pattern(n) {
    let outerLoop = 2 * n - 1;
    let innerLoop = 2 * n;

    for (let i = 1; i <= outerLoop; i++) {
      let tempI = i;

      // Adjust `tempI` for the lower half to crggeate a symmetrical pattern
      if (i > n) {
        let s = (i - n) * 2;
        tempI = i - s;
      }

      let chr = ""; // Stores the current row's pattern
      let numberOfPrints = tempI * 2; // Determines how many `*` should be printed
      let isPrint = false; // Flag to track when to stop printing `*`

      for (let j = 1; j <= innerLoop; j++) {
        if (tempI === n || isPrint || j <= numberOfPrints / 2) {
          // Print `*` in the first half and at the middle row
          chr += "* ";
        } else if (innerLoop - j === numberOfPrints / 2) {
          // Start adding spaces in the second half
          isPrint = true;
          chr += "  ";
        } else if (j > numberOfPrints / 2) {
          // Continue adding spaces
          chr += "  ";
        }
      }

      console.log(chr);
    }
  }
}
