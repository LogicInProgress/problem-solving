/*
E 
D E 
C D E 
B C D E 
A B C D E
*/

class Solution {
  pattern(n) {
    const initialStartAlphabet = 64 + n;
    for (let i = 1; i <= n; i++) {
      let temp = initialStartAlphabet - i + 1;

      for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(temp));
        process.stdout.write(" ");
        temp++;
      }

      console.log();
    }
  }
}
