let n = 5, givenNumbers = [2, 3, 1, 5]

function findMissingNumber(n, givenNumbers) {
  // Calculate the expected sum of numbers from 1 to n
  const totalSum = (n * (n + 1)) / 2;

  // Calculate the sum of the given numbers
  const actualSum = givenNumbers.reduce((sum, num) => sum + num, 0);

  return totalSum - actualSum;;
}
