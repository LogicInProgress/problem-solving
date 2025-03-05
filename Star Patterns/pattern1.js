/*
3 3 3 3 3
3 2 2 2 3
3 2 1 2 3
3 2 2 2 3
3 3 3 3 3

0 0 0 0 0
0 1 1 1 0
0 1 2 1 0
0 1 1 1 0
0 0 0 0 0
*/

class Solution {
  pattern(n) {
    const loop = n * 2 - 1;

    for (let i = 1; i <= loop; i++) {
      let chr = "";
      for (let j = 1; j <= loop; j++) {
        chr += (n + 1 - Math.min(i, j, n * 2 - i, n * 2 - j)) + " ";
      }
      console.log(chr.trim());
    }
  }
}
