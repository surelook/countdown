import wordsUrl from './words.txt?url';
import rudeWordsUrl from './rude-words.txt?url';

const fetchList = (url) => fetch(url)
    .then(response => response.text())
    .then(text => text.trim().split('\n'));

// Cats games allow rude words, listed first so they win the headline on a tie.
const LISTS = {
    classic: () => fetchList(wordsUrl),
    cats: () => Promise.all([fetchList(rudeWordsUrl), fetchList(wordsUrl)]).then(lists => lists.flat())
};

const requests = {};

export const loadWords = (set) => requests[set] ??= LISTS[set]()
    .catch(error => {
        delete requests[set];
        throw error;
    });
