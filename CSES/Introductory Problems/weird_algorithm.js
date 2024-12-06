// Initialize n and ans array with the starting value
let n = 5, ans = [n];

// Apply Collatz Conjecture until n becomes 1
while (n !== 1) {
  // If n is even, divide by 2; if odd, multiply by 3 and add 1
  n = (n % 2 === 0) ? n / 2 : n * 3 + 1;
  
  ans.push(n);
}

// Output the sequence of numbers as a space-separated string
console.log(ans.join(" "));
