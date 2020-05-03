import { EVENTS } from '../countdown-app/countdown-app';
import { shuffleArray } from '../countdown-app/countdown-app';
import { LARGE, SMALL } from '../data/numbers';

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
        })

        this.app.addEventListener(EVENTS.NEW_GAME_CREATED, () => {
            this.updateBoard();
        });

        this.updateBoard();
    }

    get board () {
        return this.querySelector('.board form');
    }

    get selectionInputs () {
        return this.querySelectorAll('.number-selection input');
    }

    get target () {
        return this.querySelector('.target').value
    }

    set target (value) {
        this.querySelector('.target').value = value
    }

    get app () {
        return this.closest('countdown-app');
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
        this.updateBoard();
    }

    takeLarge () {
        const game = {...this.app.game}
        if (game.boardNumbers.length > 5) return;
        if (game.largeNumbers.length === 0) return;
        const number = game.largeNumbers.pop();
        game.boardNumbers.push(number)
        this.app.game = game;
        this.updateBoard();
    }

    takeSmall () {
        const game = {...this.app.game}
        if (game.boardNumbers.length > 5) return;
        if (game.smallNumbers.length === 0) return;
        const number = game.smallNumbers.pop();
        game.boardNumbers.push(number)
        this.app.game = game;
        this.updateBoard();
    }

    updateBoard () {
        this.target = this.app.game.target;
        this.board.reset();
        const inputs = [...this.selectionInputs]
        
        this.app.game.boardNumbers.forEach((number, index) => {
            inputs[index].value = number;
        });
    }
}
