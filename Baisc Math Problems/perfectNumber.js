class Solution {
  isPerfect(n) {
      let count = 0;

      for (let i = 1; i <= Math.floor(n/2); i++) {
          if (n % i == 0) {
              count = count + i;
          }
      }

      return count == n;
  }
}
