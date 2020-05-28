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

        this.app.addEventListener(EVENTS.NEW_GAME_CREATED, () => {
            this.render();
        });

        this.app.addEventListener(EVENTS.GAME_LOADED, () => {
            this.render();
        });

        if (this.app.game) {
            this.render();
        }
    }
    template = () => {
        return `
        <div class="board-controls">
            <div class="controls">
            <button class="button is-rounded is-small" value="clear">Clear Board</button>
            <button class="button is-rounded is-small" value="consonant">Consonant [<span class="consonant-count"></span>]</button>
            <button class="button is-rounded is-small" value="vowel">Vowel [<span class="vowel-count"></span>]</button>
            </div>
            <div class="board-selection">
            <button value="letters">Letters</button>
            <button value="numbers">Numbers</button>
            <button value="conundrum">Conundrum</button>
            </div>
        </div>
        <div class="letter-selection">
            ${'<div class="letter-tile"></div>'.repeat(9)}
        </div>`.trim();
    }

    render () {
        this.innerHTML = this.template();

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
        this.render();
    }

    takeVowel () {
        const game = {...this.app.game}
        if (game.boardLetters.length > 8) return
        const vowel = game.vowels.pop();
        game.boardLetters.push(vowel)
        this.app.game = game;
        this.render();
    }

    reset () {
        const game = {...this.app.game};
        game.boardLetters = [];
        this.app.game = game;
        this.render();
    }

    get board () {
        return this.querySelector('.letter-selection');
    }

    get app () {
        return this.closest('countdown-app');
    }
}
