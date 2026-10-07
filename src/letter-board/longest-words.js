const letterCounts = (word) => {
    const counts = {};
    for (const letter of word) counts[letter] = (counts[letter] ?? 0) + 1;
    return counts;
};

const canMake = (word, available) => {
    const used = {};
    for (const letter of word) {
        used[letter] = (used[letter] ?? 0) + 1;
        if (used[letter] > (available[letter] ?? 0)) return false;
    }
    return true;
};

export const longestWords = (words, letters) => {
    const available = letterCounts(letters.toLowerCase());
    let best = [];

    for (const word of words) {
        const bestLength = best[0]?.length ?? 0;
        if (word.length < bestLength || !canMake(word, available)) continue;
        best = word.length > bestLength ? [word] : [...best, word];
    }

    return best;
};
