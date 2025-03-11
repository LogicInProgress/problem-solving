/*
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
*/

class Solution {
  pattern(n) {
    let intialSpaces = 0
    for (let i = 1; i <= n; i++) {

      // Print *
      for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write("*")
      }

      // Print spaces
      for (let k = 1; k <= intialSpaces; k++) {
        process.stdout.write(" ");
      }

      // Print next set of *
      for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write("*");
      }

      intialSpaces += 2;
      console.log();
    }

    intialSpaces = 2 * n - 2;
    for (let i = 1; i <= n; i++) {

      // Print *
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }

      // Print spaces
      for (let k = 1; k <= intialSpaces; k++) {
        process.stdout.write(" ");
      }

      // Print next set of *
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }

      intialSpaces -= 2;
      console.log();
    }

  }
}
