class Solution {
  GCD(n1, n2) {
    // let gcd = 1;
    // for (let i = 1; i <= Math.min(n1, n2); i++) {
    //   if (n1 % i === 0 && n2 % i === 0) {
    //     gcd = i;
    //   }
    // }
    // return gcd;

    while (n2 !== 0) {
        [n1, n2] = [n2, n1 % n2];
    }
    return n1;
  }
}
