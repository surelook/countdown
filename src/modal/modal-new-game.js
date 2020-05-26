import { EVENTS } from '../countdown-app/countdown-app';

export class ModalNewGame extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if (event.target.matches('[data-action="playClassicCountdown"]')) {
                event.preventDefault();
                this.app.createNewGame();
            }

            if (event.target.matches('[data-action="playCatsCountdown"]')) {
                event.preventDefault();
                this.app.createNewGame(true);
            }

            if (event.target.matches('[data-action="dismiss"]')) {
                event.preventDefault();
                this.dismiss();
            }
        })
        
        this.app.addEventListener(EVENTS.NEW_GAME_REQUESTED, () => {
            this.isActive = true;
            this.render();
        });

        this.app.addEventListener(EVENTS.NEW_GAME_CREATED, () => {
            this.dismiss();
        })

        this.render();
    }

    dismiss () {
        this.isActive = false;
        this.render()
    }

    get app () {
        return document.querySelector('countdown-app');
    }

    template = () => `
        <div class="modal${this.isActive ? ' is-active' : ''}">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <h4>Start a New Game</h4>
                                Starting a new game will clear any progress on your current game. All letters will be shuffled and returned to the deck.
                            </div>
                        </div>
                        <footer class="card-footer">
                        <a href="#" data-action="dismiss" class="card-footer-item">Countinue Current Game</a>
                            <a href="#" data-action="playClassicCountdown" class="card-footer-item">Play Classic Countdown</a>
                            <a href="#" data-action="playCatsCountdown" class="card-footer-item">Play Cats Countdown</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        `.trim()

    render() {
        this.innerHTML = this.template();
    }
}