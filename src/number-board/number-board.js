import { EVENTS } from '../countdown-app/countdown-app';
import { shuffleArray } from '../utils';
import { LARGE, SMALL } from '../data/numbers';
import { solve_numbers as solveNumbers } from './solver'

export class NumberBoard extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if (event.target.matches('[value="clear"]')) {
                this.reset();
            }

            if (event.target.matches('[value="large"]')) {
               this.takeLarge();
            }

            if (event.target.matches('[value="small"]')) {
                this.takeSmall();
            }

            if (event.target.matches('[value="target"]')) {
                this.setTarget();
            }

            if (event.target.matches('[value="solve"]')) {
                this.solve();
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
                    <button class="button is-rounded is-small" value="large">Large</button>
                    <button class="button is-rounded is-small" value="small">Small</button>
                    <button class="button is-rounded is-small" value="target">Target</button>
                    ${this.readyToSolve ? 
                        `<button class="button is-rounded is-small" value="solve">Solution</button>`
                        :
                        ``
                    }
                </div>
            </div>
            <div class="board-selection">
                <button value="letters">Letters</button>
                <button value="numbers">Numbers</button>
                <button value="conundrum">Conundrum</button>
            </div>
        </div>
        <div class="board">
            <div class="target"></div>
            <div class="number-selection">
                ${'<div class="number-tile"></div>'.repeat(6)}
            </div>
        </div>`.trim();
    }

    get board () {
        return this.querySelector('.board form');
    }

    get numberTiles () {
        return this.querySelectorAll('.number-selection .number-tile');
    }

    get target () {
        return +this.querySelector('.target').innerText
    }

    set target (value) {
        this.querySelector('.target').innerText = value
    }

    get app () {
        return this.closest('countdown-app');
    }

    get readyToSolve () {
        return this.app.game.boardNumbers.length > 5 && this.app.game.target > 100
    }

    setTarget () {
        let count = 100;

        const setNumber = () => {
            this.target = Math.floor(Math.random()*(999-100+1)+100);
            count--;

            if (count < 1) {
                const game = {...this.app.game};
                game.target = this.target;
                this.app.game = game;
                this.render();
                return
            }

            requestAnimationFrame(setNumber);
        }

        setNumber();
    }

    reset () {
        const game = {...this.app.game};
        game.target = this.target = 0;
        game.boardNumbers = [];
        game.largeNumbers = shuffleArray(LARGE);
        game.smallNumbers = shuffleArray(SMALL);
        this.app.game = game;
        this.render();
    }

    takeLarge () {
        const game = {...this.app.game}
        if (game.boardNumbers.length > 5) return;
        if (game.largeNumbers.length === 0) return;
        const number = game.largeNumbers.pop();
        game.boardNumbers.push(number)
        this.app.game = game;
        this.render();
    }

    takeSmall () {
        const game = {...this.app.game}
        if (game.boardNumbers.length > 5) return;
        if (game.smallNumbers.length === 0) return;
        const number = game.smallNumbers.pop();
        game.boardNumbers.push(number)
        this.app.game = game;
        this.render();
    }

    render () {
        this.innerHTML = this.template();
        this.target = this.app.game.target;
        const numberTiles = [...this.numberTiles];
        const boardValues = [...this.app.game.boardNumbers, ...Array(6 - this.app.game.boardNumbers.length).fill('')];

        boardValues.forEach((number, index) => {
            numberTiles[index].innerText = number;
        });
    }

    solve () {
        let numbers = this.app.game.boardNumbers;
        let target = this.app.game.target;
        console.log('solving')
        document.querySelector('modal-number-solution')
            .setSolution(solveNumbers(numbers, target))
    }
}
