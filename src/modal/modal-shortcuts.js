import { ALL_BOARD_SHORTCUTS, BOARDS, GLOBAL_SHORTCUTS } from '../shortcuts';

const row = (shortcut) => `
    <div class="shortcut">
        <span class="keys">${(shortcut.labels ?? [shortcut.label]).map(label => `<kbd>${label}</kbd>`).join('')}</span>
        <span>${shortcut.description}</span>
    </div>`;

const SWITCH_BOARDS = { labels: BOARDS.map(board => board.select.label), description: 'Switch Boards' };

export class ModalShortcuts extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if (event.target.matches('[data-action="dismiss"]')) {
                event.preventDefault();
                this.toggle(false);
            }
        })

        this.render();
    }

    template = () => `
        <div class="modal${this.active ? ' is-active' : ''}">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <h4>Keyboard Shortcuts</h4>
                                <section class="tier is-global">
                                    <h5>Anywhere</h5>
                                    <div class="shortcut-list">${[...GLOBAL_SHORTCUTS.slice(0, 2), SWITCH_BOARDS, ...GLOBAL_SHORTCUTS.slice(2)].map(row).join('')}</div>
                                </section>
                                <div class="boards">
                                        ${BOARDS.map(board => `
                                            <div class="board">
                                                <h5>${board.name}</h5>
                                                ${[...board.shortcuts, ...ALL_BOARD_SHORTCUTS].map(row).join('')}
                                            </div>`).join('')}
                                </div>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="#" data-action="dismiss" class="card-footer-item">Continue</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        `.trim()

    render() {
        this.innerHTML = this.template();
    }

    toggle(active = !this.active) {
        this.active = active;
        this.render();
    }
}
