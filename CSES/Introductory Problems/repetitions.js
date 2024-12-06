function repetitions(sequence) {
    let maxString = '';
    let maxCount = 0;

    let currentChar = sequence[0];
    let currentCount = 1;

    for (let i = 1; i <= sequence.length; i++) {
        if (i < sequence.length && sequence[i] === currentChar) {
            currentCount++;
        } else {
            // Update the maximum found so far
            if (currentCount > maxCount) {
                maxCount = currentCount;
                maxString = currentChar;
            }
            // Reset for the next sequence
            currentChar = sequence[i];
            currentCount = 1;
        }
    }

    return maxString;
}
