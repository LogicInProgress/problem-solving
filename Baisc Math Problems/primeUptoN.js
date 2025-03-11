class Solution {
  primeUptoN(n) {
      let numberOfPrimes = 0;

      for (let j = 2; j <= n; j++) {
          if (isPrime(j)) {
              numberOfPrimes++;
          }
      }

      return numberOfPrimes;

      function isPrime(n) {
          if (n === 1) return false;

          let count = 0;

          for (let i = 1; i * i <= n; i++) {
              if (n % i === 0) {
                  count = count + i;
              }
          }

          return count == 1;
      }
  }
}
