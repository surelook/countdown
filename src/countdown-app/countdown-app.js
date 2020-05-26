import { Storage } from '../storage';
import { CONSONANTS } from '../data/consonants';
import { CATS_CONUNDRUMS } from '../data/cats-conundrums';
import { VOWELS } from '../data/vowels';
import { LARGE, SMALL } from '../data/numbers';

export const shuffleArray = (array) => {    
    return array
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
}

export const EVENTS = {
    NEW_GAME_CREATED: 'new-game-created'
}

export class CountdownApp extends HTMLElement {
    static get observedAttributes () {
        return ['board'];
    }

    connectedCallback() {
        if (this.game) {
            this.loadGame();
        } else {
            this.createNewGame();
        }

        this.addEventListener('click', (event) => {
            if (event.target.matches('[value="new"]')) {
                if (confirm('Starting a new game will clear progress and shuffle all letters. Would you like to start a new game?')) {
                    this.createNewGame();
                }
            }

            if (event.target.matches('[value="reset"]')) {
                this.countingState = '';
                this.video.pause();
                this.video.currentTime = 0;
            }

            if (event.target.matches('[value="play"]')) {
                this.countingState = 'counting';
                this.video.play();
            }

            if (event.target.matches('[value="pause"]')) {
                this.countingState = 'paused';
                this.video.pause();
            }

            if (event.target.matches('[value="fullscreen"]')) {
                document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
            } 

            if (event.target.matches('[value="letters"]')) {
                this.board = 'letters';
            } 

            if (event.target.matches('[value="numbers"]')) {
                this.board = 'numbers';
            } 

            if (event.target.matches('[value="conundrum"]')) {
                this.board = 'conundrum';
            } 
        })
    }

    get game () {
        return Storage.getItem('game');
    }

    set game (data) {
        Storage.setItem('game', data);
    }

    get countingState () {
        this.getAttribute('counting-state');
    }

    set countingState (value) {
        this.setAttribute('counting-state', value);
    }

    get video () {
        return this.querySelector('video');
    }

    get board () {
        return this.getAttribute('board')
    }

    set board (value) {
        return this.setAttribute('board', value)
    }

    attributeChangedCallback (name) {
        if (name === 'board') {
            const game = this.game;
            game.board = this.board;
            this.game = game;
        }
    }

    loadGame () {
        this.board = this.game.board;
    }

    createNewGame () {
        this.game = {
            consonants: shuffleArray(shuffleArray(shuffleArray(shuffleArray(CONSONANTS)))),
            conundrums: shuffleArray(CATS_CONUNDRUMS),
            vowels: shuffleArray(VOWELS),
            boardLetters: [],
            board: 'letters',
            largeNumbers: shuffleArray(LARGE),
            smallNumbers: shuffleArray(SMALL),
            boardNumbers: [],
            target: 0,
            boardConundrum: null
        }

        this.dispatchEvent(new Event(EVENTS.NEW_GAME_CREATED));

        this.board = this.game.board;
    }
}