# Binary Search
Binary search is an efficient array search algorithm. It works by narrowing down the search range by half each time.

## Deducing binary search
It's essential to understand and deduce the algorithm yourself instead of memorizing it. In an actual interview, interviewers may ask you additional questions to test your understanding, so simply memorizing the algorithm may not be enough to convince the interviewer.

Key elements in writing a correct binary search:
- When to terminate the loop: Make sure the while loop includes an equality comparison; otherwise, we might skip the loop and miss the potential match for the edge case of a one-element array.

- Whether/how to update left and right boundary in the if conditions: Consider which side to discard. If arr[mid] is smaller than the target, we should discard everything on the left by making left = mid + 1.

- Should I discard the current element? For vanilla binary search, we can discard it since it cannot be the final answer if it is not equal to the target. There might be situations where you would want to think twice before discarding the current element. We'll discuss this in the next module.

