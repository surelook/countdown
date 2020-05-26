import { EVENTS } from '../countdown-app/countdown-app'

export class LetterBoard extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if (event.target.matches('[value="clear"]')) {
                this.reset()
            }

            if (event.target.matches('[value="consonant"]')) {
                this.takeConsonant();
            }

            if (event.target.matches('[value="vowel"]')) {
                this.takeVowel();
            }
        })

        this.board.addEventListener('keydown', (event) => event.preventDefault());

        this.app.addEventListener(EVENTS.NEW_GAME_CREATED, () => {
            this.updateBoard();
        });

        this.app.addEventListener(EVENTS.GAME_LOADED, () => {
            this.updateBoard();
        });

        if (this.app.game) {
            this.updateBoard();
        }
    }

    updateBoard () {
        const letterTiltes = [...this.board.querySelectorAll('.letter-tile')]

        this.querySelector('.consonant-count').innerText = this.app.game.consonants.length;
        this.querySelector('.vowel-count').innerText = this.app.game.vowels.length;

        const boardValues = [...this.app.game.boardLetters, ...Array(9 - this.app.game.boardLetters.length).fill('')];

        boardValues.forEach((letter, index) => {
            letterTiltes[index].innerText = letter;
        });
    }

    takeConsonant () {
        const game = {...this.app.game}
        if (game.boardLetters.length > 8) return
        const consonant = game.consonants.pop();
        game.boardLetters.push(consonant)
        this.app.game = game;
        this.updateBoard();
    }

    takeVowel () {
        const game = {...this.app.game}
        if (game.boardLetters.length > 8) return
        const vowel = game.vowels.pop();
        game.boardLetters.push(vowel)
        this.app.game = game;
        this.updateBoard();
    }

    reset () {
        const game = {...this.app.game};
        game.boardLetters = [];
        this.app.game = game;
        this.updateBoard();
    }

    get board () {
        return this.querySelector('.letter-selection');
    }

    get app () {
        return this.closest('countdown-app');
    }
}
