var findSubstring = function(s, words) {
    // Edge case: If no words are provided, return empty array
    if (words.length === 0 || s.length === 0) return [];

    const wordLength = words[0].length;
    const wordCount = words.length;
    const substringLength = wordLength * wordCount;
    const wordMap = new Map();

    // Populate the map with the frequency of each word in words
    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    const result = [];

    // Loop through each possible starting position of the substring
    for (let i = 0; i < wordLength; i++) {
        let left = i;
        let right = i;
        let currentMap = new Map();
        let count = 0;

        // Sliding window approach to check substrings
        while (right + wordLength <= s.length) {
            // Get the word at the current right index
            const word = s.slice(right, right + wordLength);
            right += wordLength; // Move the right pointer forward

            // If the word is part of the words list
            if (wordMap.has(word)) {
                // Update the currentMap and count for valid words
                currentMap.set(word, (currentMap.get(word) || 0) + 1);
                count++;

                // If we have more than required count of this word, move the left pointer
                while (currentMap.get(word) > wordMap.get(word)) {
                    const leftWord = s.slice(left, left + wordLength);
                    currentMap.set(leftWord, currentMap.get(leftWord) - 1);
                    left += wordLength;
                    count--;
                }

                // If we have seen exactly wordCount valid words, add the index to result
                if (count === wordCount) {
                    result.push(left);
                    const leftWord = s.slice(left, left + wordLength);
                    currentMap.set(leftWord, currentMap.get(leftWord) - 1);
                    left += wordLength;
                    count--;
                }
            } else {
                // If the word is not in the list, reset the sliding window
                currentMap.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
};
