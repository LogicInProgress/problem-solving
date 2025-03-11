class Solution {
  divisors(n) {
      let divisors = [];

      for (let i = 1; i <= n; i ++) {
          if (n % i == 0) {
              divisors.push(i);
          }
      }

      return divisors;
  }

  divisorsOptimize(n) {
    let divisors = [];

    for (let i = 0; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        divisors.push(i);

        if (i != n / i) {
          divisors.push(n / i);
        }
      }
    }

    console.log(divisors);
  }
}
