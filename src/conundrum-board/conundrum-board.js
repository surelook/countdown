import { EVENTS } from '../countdown-app/countdown-app';

export class ConundrumBoard extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if (event.target.matches('[value="reveal"]')) {
                this.state = 'reveal';
            }

            if (event.target.matches('[value="new"]')) {
                event.stopPropagation();
                this.state = '';
                this.getNewConundrum();
            }

            if (event.target.matches('[value="clear"]')) {
                this.reset();
            }
        })

        this.app.addEventListener(EVENTS.NEW_GAME_CREATED, () => {
            this.updateBoard();
        });

        this.updateBoard();
    }

    get state () {
        return this.getAttribute('state')
    }

    set state (value) {
        return this.setAttribute('state', value)
    }

    get conundrumBoard () {
        return this.querySelector('.conundrum-board');
    }

    get answerBoard () {
        return this.querySelector('.answer-board');
    }

    get app () {
        return this.closest('countdown-app');
    }

    getNewConundrum () {
        const game = this.app.game;
        if (game.conundrums.length < 1) return ;
        game.boardConundrum = game.conundrums.pop();
        this.app.game = game;
        this.updateBoard();
    }

    reset () {
        this.state = '';
        const game = this.app.game;
        game.boardConundrum = null;
        this.app.game = game;
        this.updateBoard();
    }

    updateBoard () {
        if (!this.app.game.boardConundrum) {
            this.conundrumBoard.reset();
            this.answerBoard.reset();
            return;
        }

        this.app.game.boardConundrum.word
            .split('')
            .forEach((letter, index) => {
                this.conundrumBoard.querySelectorAll('input')[index].value = letter;
        })

        this.app.game.boardConundrum.answer
            .split('')
            .forEach((letter, index) => {
                this.answerBoard.querySelectorAll('input')[index].value = letter;
        })
    }
}
