import { Storage } from '../storage';
import { CONSONANTS } from '../data/consonants';
import { loadConundrums } from '../data/conundrums';
import { VOWELS } from '../data/vowels';
import { LARGE, SMALL } from '../data/numbers';
import { shuffleArray } from '../utils';
import { SHORTCUTS } from '../shortcuts';
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
                <button class="button is-rounded is-small shortcuts-button" value="shortcuts"><svg class="button-icon"><use href="#icon-keyboard"></use></svg> Shortcuts</button>
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
        <modal-number-solution></modal-number-solution>
        <modal-shortcuts></modal-shortcuts>`
    }

    connectedCallback() {
        if (this.game) {
            this.loadGame();
        }

        this.addEventListener('click', (event) => {
            // detail is 0 for keyboard and scripted clicks. A mouse click would otherwise leave focus
            // behind for the next key press (a shortcut, or Esc on a modal) to paint a focus ring on.
            if (event.detail > 0) event.target.closest('button')?.blur();

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

            if (event.target.matches('[value="shortcuts"]')) {
                this.querySelector('modal-shortcuts').toggle(true);
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

        // Boards re-render their buttons on every change, so label them whenever the DOM changes.
        new MutationObserver(this.labelShortcuts).observe(this, { childList: true, subtree: true });

        document.addEventListener('keydown', this.onKeydown);

        // A button focused by an earlier click would otherwise also press on Space's keyup.
        document.addEventListener('keyup', (event) => {
            if (event.key === ' ') event.preventDefault();
        });

        this.render()

        this.video.addEventListener('ended', () => {
            this.countingState = 'paused';
        });
    }

    onKeydown = (event) => {
        if (event.metaKey || event.ctrlKey || event.altKey) return;

        const key = event.key === '?' ? '/' : event.key.length === 1 ? event.key.toLowerCase() : event.key;
        const openModal = this.querySelector('.modal.is-active');

        if (openModal) {
            const isShortcuts = openModal.closest('modal-shortcuts');
            if (key === 'Escape' || (isShortcuts && key === '/')) {
                event.preventDefault();
                openModal.querySelector('[data-action="dismiss"]')?.click();
            }
            if (key === 'f') {
                event.preventDefault();
                if (!event.repeat) this.querySelector('[value="fullscreen"]').click();
            }
            // Stops a focused button behind the modal pressing, while leaving the modal's own links usable.
            if (key === 'Enter' && !openModal.contains(document.activeElement)) {
                event.preventDefault();
            }
            return;
        }

        const targets = SHORTCUTS
            .filter(shortcut => shortcut.key === key && shortcut.target)
            .map(shortcut => shortcut.target);
        if (!targets.length) return;

        // Even with nothing to press, stop Enter/Space activating whichever button was last clicked.
        event.preventDefault();
        if (event.repeat) return;

        [...this.querySelectorAll(targets.join(', '))]
            // No rects means display: none here or on an ancestor. checkVisibility() would read better, but needs Safari 17.4.
            .find(button => button.getClientRects().length)
            ?.click();
    }

    labelShortcuts = () => {
        for (const shortcut of SHORTCUTS) {
            const ariaKey = shortcut.key === ' ' ? 'Space' : shortcut.key.length === 1 ? shortcut.key.toUpperCase() : shortcut.key;

            this.querySelectorAll(shortcut.target).forEach(button => {
                button.dataset.shortcut = shortcut.label;
                button.setAttribute('aria-keyshortcuts', ariaKey);
            });
        }
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