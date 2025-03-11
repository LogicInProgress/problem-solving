class Solution {
  LCM(n1, n2) {

    return (n1 * n2) / GCD(n1, n2);

    function GCD(n1, n2) {
      while (n2 !== 0) {
        [n1, n2] = [n2, n1 % n2];
      }
      return n1;
    }
  }
}
