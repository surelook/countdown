import { Storage } from '../storage';
import { CONSONANTS } from '../data/consonants';
import { loadConundrums } from '../data/conundrums';
import { VOWELS } from '../data/vowels';
import { LARGE, SMALL } from '../data/numbers';
import { shuffleArray } from '../utils';
import clockVideo from '../videos/countdown-clock.mp4';
import clockPoster from '../images/countdown-clock-placeholder.jpg';

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
        <video src="${clockVideo}" preload="auto" poster="${clockPoster}" playsinline></video>
        <div class="game-controls">
            <div class="controls">
                <button class="button is-rounded is-small" value="new">New Game</button>
                <button class="button is-rounded is-small" value="play"><svg class="button-icon icon-play"><use href="#icon-play"></use></svg> Start Clock</button>
                <button class="button is-rounded is-small" value="pause"><svg class="button-icon icon-pause"><use href="#icon-pause"></use></svg> Pause Clock</button>
                <button class="button is-rounded is-small" value="reset"><svg class="button-icon icon-reset"><use href="#icon-reset"></use></svg> Reset Clock</button>
                <button class="button is-rounded is-small fullscreen-button" value="fullscreen">
                    <svg class="button-icon icon-expand"><use href="#icon-expand"></use></svg>
                    <svg class="button-icon icon-compress"><use href="#icon-compress"></use></svg>
                    Fullscreen
                </button>
            </div>
        </div>
        <letter-board></letter-board>
        <number-board></number-board>
        <conundrum-board></conundrum-board>
        <modal-welcome></modal-welcome>
        <modal-new-game></modal-new-game>
        <modal-letter-solution></modal-letter-solution>
        <modal-number-solution></modal-number-solution>`
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

        this.video.addEventListener('ended', () => {
            this.countingState = 'paused';
        });
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
        const game = this.game;

        // Saves from before conundrums were loaded on demand hold the whole shuffled list.
        if (game.conundrums) {
            game.conundrumSet = game.conundrums.some(conundrum => conundrum.type) ? 'cats' : 'classic';
            game.usedConundrums = [];
            delete game.conundrums;
            this.game = game;
        }

        loadConundrums(game.conundrumSet);
        this.board = game.board;
        this.dispatchEvent(new Event(EVENTS.GAME_LOADED));
    }

    createNewGame (isCats = false) {
        this.game = {
            consonants: shuffleArray(shuffleArray(shuffleArray(shuffleArray(CONSONANTS)))),
            conundrumSet: isCats ? 'cats' : 'classic',
            usedConundrums: [],
            vowels: shuffleArray(VOWELS),
            boardLetters: [],
            board: 'letters',
            largeNumbers: shuffleArray(LARGE),
            smallNumbers: shuffleArray(SMALL),
            boardNumbers: [],
            target: 0,
            boardConundrum: null
        }

        loadConundrums(this.game.conundrumSet);

        this.dispatchEvent(new CustomEvent(EVENTS.NEW_GAME_CREATED, {
            bubbles: true,
            detail: {
                gameMode: isCats ? 'Cats' : 'Classic'
            }
        }));

        this.board = this.game.board;
    }

    render () {
        this.innerHTML = this.template();
    }
}