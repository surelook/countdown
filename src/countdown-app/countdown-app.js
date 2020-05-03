import { Storage } from '../storage';
import { CONSONANTS } from '../data/consonants';
import { CONUNDRUMS } from '../data/conundrums';
import { VOWELS } from '../data/vowels';
import { LARGE, SMALL } from '../data/numbers';

export const shuffleArray = (array) => {
    return array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
}

export const EVENTS = {
    NEW_GAME_CREATED: 'new-game-created'
}

export class CountdownApp extends HTMLElement {
    static get observedAttributes () {
        return ['state'];
    }

    connectedCallback() {
        if (this.game) {
            this.loadGame();
        } else {
            this.createNewGame();
        }

        this.addEventListener('click', (event) => {
            if (event.target.matches('[value="new"]')) {
                this.createNewGame();
            }

            if (event.target.matches('[value="reset"]')) {
                this.video.pause();
                this.video.currentTime = 0;
            }

            if (event.target.matches('[value="play"]')) {
                this.video.play();
            }

            if (event.target.matches('[value="pause"]')) {
                this.video.pause();
            }

            if (event.target.matches('[value="fullscreen"]')) {
                document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
            } 

            if (event.target.matches('[value="letters"]')) {
                this.state = 'letters';
            } 

            if (event.target.matches('[value="numbers"]')) {
                this.state = 'numbers';
            } 

            if (event.target.matches('[value="conundrum"]')) {
                this.state = 'conundrum';
            } 
        })
    }

    get game () {
        return Storage.getItem('game');
    }

    set game (data) {
        Storage.setItem('game', data);
    }

    get video () {
        return this.querySelector('video');
    }

    get state () {
        return this.getAttribute('state')
    }

    set state (value) {
        return this.setAttribute('state', value)
    }

    attributeChangedCallback (name) {
        if (name === 'state') {
            const game = this.game;
            game.state = this.state;
            this.game = game;
        }
    }

    loadGame () {
        this.state = this.game.state;
    }

    createNewGame () {
        this.game = {
            consonants: shuffleArray(CONSONANTS),
            conundrums: shuffleArray(CONUNDRUMS),
            vowels: shuffleArray(VOWELS),
            boardLetters: [],
            state: 'letters',
            largeNumbers: shuffleArray(LARGE),
            smallNumbers: shuffleArray(SMALL),
            boardNumbers: [],
            target: 0,
            boardConundrum: null
        }

        this.dispatchEvent(new Event(EVENTS.NEW_GAME_CREATED));

        this.state = this.game.state;
    }
}