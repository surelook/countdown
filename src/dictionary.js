import Trie from '@datastructures-js/trie';
import words from 'raw-loader!./data/words.txt';

const dictionary = new Trie();
words.split('\n').forEach((word) => {
  dictionary.insert(word);
})

export class Dictionary {
  static _recurseSolveLetters = (letters, node, used_letter, cb, answer) => {
    if (node.isEndOfWord() && answer.length) {
      cb(answer, node);
    }
  
    if (answer.length == letters.length) {
      return;
    }
  
    let done = {};
  
    for (let i = 0; i < letters.length; i++) {
      let c = letters[i];

      if (used_letter[i] || done[c]) {
        continue;
      }

      if (node.hasChild(c)) {
          used_letter[i] = true;
          done[c] = true;
          this._recurseSolveLetters(letters, node.getChild(c), used_letter, cb, answer+c);
          used_letter[i] = false;
      }
    }
  }

  static _solveLetters = (letters, cb) => {
    this._recurseSolveLetters(letters, dictionary._root, {}, cb, '');
  }

  static getSolutions = (letters) => {
    return new Promise((resolve) => {
      let results = [];
      this._solveLetters(letters, (word, node) => results.push(word));
      resolve(results.sort((a, b) => b.length - a.length));
    });
  }
}
