import classicUrl from './classic-conundrums.json?url';
import catsUrl from './cats-conundrums.json?url';

const URLS = { classic: classicUrl, cats: catsUrl };
const requests = {};

export const loadConundrums = (set) => requests[set] ??= fetch(URLS[set])
    .then(response => response.json())
    .catch(error => {
        delete requests[set];
        throw error;
    });
