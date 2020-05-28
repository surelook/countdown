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
                <div>
                    <button class="button is-rounded is-small" value="new">New Conundrum</button>
                    <button class="button is-rounded is-small" value="reveal">Reveal</button>
                </div>
            </div>
            <div class="board-selection">
                <button value="letters">Letters</button>
                <button value="numbers">Numbers</button>
                <button value="conundrum">Conundrum</button>
            </div>
        </div>
        <div class="board">
            <div class="conundrum-board">
                ${'<div class="letter-tile"></div>'.repeat(this.boardLength)}
            </div>
            <div class="answer-board">
                ${'<div class="letter-tile"></div>'.repeat(this.boardLength)}
            </div>
        </div>`.trim();
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
    
    get boardLength () {
        if (!this.app.game || !this.app.game.boardConundrum) {
            return 9;
        }

        return this.app.game.boardConundrum.word.length;
    }

    getNewConundrum () {
        const game = this.app.game;
        if (game.conundrums.length < 1) return ;
        game.boardConundrum = game.conundrums.pop();
        this.app.game = game;
        this.render();
    }

    reset () {
        this.state = '';
        const game = this.app.game;
        game.boardConundrum = null;
        this.app.game = game;
        this.render();
    }

    render () {
        this.innerHTML = this.template();
        
        if (!this.app.game.boardConundrum) {
            return
        }

        this.app.game.boardConundrum.word
            .split('')
            .forEach((letter, index) => {
                this.conundrumBoard.querySelectorAll('.letter-tile')[index].innerText = letter;
        })

        this.app.game.boardConundrum.answer
            .split('')
            .forEach((letter, index) => {
                this.answerBoard.querySelectorAll('.letter-tile')[index].innerText = letter;
        })
    }
}
