import { EVENTS } from '../countdown-app/countdown-app';

export class ModalWelcome extends HTMLElement {
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
        })
        
        this.app.addEventListener(EVENTS.NEW_GAME_CREATED, () => {
            this.render();
        });

        this.render();
    }

    get app () {
        return this.closest('countdown-app');
    }

    template = () => `
        <div class="modal${!this.app.game ? ' is-active' : ''}">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <h4>Welcome to Countdown &mdash; nothing to do with the Channel 4 series, yet coincidentally, a game of letters, numbers and conundrums.</h4>
                                You may choose to play using conundrums from either the <em>Classic</em> series of Countdown, or from the popular spin-off series <em>8 Out of 10 Cats Does Countdown</em>. Again, just a coincidence.
                            </div>
                        </div>
                        <footer class="card-footer">
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