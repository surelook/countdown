import Trie from '@datastructures-js/trie';
import words from 'raw-loader!./words.txt';

const dictionary = new Trie();
const wordArray = words.split('\n');

wordArray.forEach((word) => {
    dictionary.insert(word);
})

const recurseSolveLetters = (letters, node, used_letter, cb, answer) => {
  if (node.isEndOfWord() && answer.length) {
    cb(answer, node);
  }

  if (answer.length == letters.length) {
    return;
  }

  var done = {};

  for (var i = 0; i < letters.length; i++) {
      var c = letters[i];

      if (used_letter[i] || done[c]) {
        continue;
      }

      if (node.hasChild(c)) {
          used_letter[i] = true;
          done[c] = true;
          recurseSolveLetters(letters, node.getChild(c), used_letter, cb, answer+c);
          used_letter[i] = false;
      }
  }
}

const solveLetters = (letters, cb) => {
  recurseSolveLetters(letters, dictionary._root, {}, cb, '');
}

let results = []
solveLetters('tnetennba'.split(''), (result) => results.push(result))