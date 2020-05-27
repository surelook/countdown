import { Storage } from '../storage';
import { CONSONANTS } from '../data/consonants';
import { CLASSIC_CONUNDRUMS } from '../data/classic-conundrums';
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
    NEW_GAME_CREATED: 'new-game-created',
    GAME_LOADED: 'game-loaded',
    NEW_GAME_REQUESTED: 'new-game-requested'
}

export class CountdownApp extends HTMLElement {
    static get observedAttributes () {
        return ['board'];
    }

    template = () => {
        return `
        <video src="./videos/countdown-clock.mp4" preload="auto" poster="./images/countdown-clock-placeholder.jpg"></video>
        <div class="game-controls">
            <div class="controls">
                <button class="button is-rounded is-small" value="new">New Game</button>
                <button class="button is-rounded is-small" value="play"><i class="fas fa-play"></i> Start Clock</button>
                <button class="button is-rounded is-small" value="pause"><i class="fas fa-pause"></i> Pause Clock</button>
                <button class="button is-rounded is-small" value="reset"><i class="fas fa-history"></i> Reset Clock</button>
                <button class="button is-rounded is-small fullscreen-button" value="fullscreen">
                    <i class="fas fa-expand"></i>
                    <i class="fas fa-compress"></i>
                    Fullscreen
                </button>
            </div>
        </div>
        <letter-board></letter-board>
        <number-board></number-board>
        <conundrum-board></conundrum-board>
        <modal-welcome></modal-welcome>
        <modal-new-game></modal-new-game>`
    }

    connectedCallback() {
        if (this.game) {
            this.loadGame();
        }

        this.addEventListener('click', (event) => {
            if (event.target.matches('[value="new"]')) {
                this.dispatchEvent(new Event(EVENTS.NEW_GAME_REQUESTED));
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

        this.render()
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
        this.dispatchEvent(new Event(EVENTS.GAME_LOADED));
    }

    createNewGame (isCats = false) {
        this.game = {
            consonants: shuffleArray(shuffleArray(shuffleArray(shuffleArray(CONSONANTS)))),
            conundrums: shuffleArray(isCats ? CATS_CONUNDRUMS : CLASSIC_CONUNDRUMS),
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

    render () {
        this.innerHTML = this.template();
    }
}