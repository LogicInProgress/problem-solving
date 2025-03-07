/*
*****
*   *
*   *
*   *
*****
*/
class Solution {
  pattern(n) {
    for (let i = 1; i <= n; i++) {
      let chr = "";
      for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
          chr += "*";
        } else {
          chr += " ";
        }
      }
      console.log(chr.trim());
    }
  }
}
