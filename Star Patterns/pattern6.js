class Solution {
  pattern(n) {
    let intialSpaces = 2 * n - 2;
    for (let i = 1; i <= 5; i++) {
      let letters = i * 2 - 1;
      let intialLetter = 65;

      for (let j = 1; j <= intialSpaces / 2; j++) {
        process.stdout.write(" ");
      }

      for (let k = 1; k <= Math.ceil(letters / 2); k++) {
        process.stdout.write(String.fromCharCode(intialLetter));
        intialLetter = intialLetter + 1;
      }

      intialLetter = intialLetter - 2;

      for (let l = Math.ceil(letters / 2) - 1; l >= 1; l--) {
        process.stdout.write(String.fromCharCode(intialLetter));
        intialLetter = intialLetter - 1;
      }

      intialSpaces = intialSpaces - 2;
      console.log();
    }
  }
}
