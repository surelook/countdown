import { EVENTS } from '../countdown-app/countdown-app';

export class ModalNumberSolution extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if (event.target.matches('[data-action="dismiss"]')) {
                event.preventDefault();
                this.active = false;
                this.render();
            }
        })

        this.render();
    }

    get app () {
        return this.closest('countdown-app');
    }

    template = () => `
        <div class="modal${this.active ? ' is-active' : ''}">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="card">
                        <div class="card-content">
                            <div class="content solution">${this.solution.trim()}</div>
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

    setSolution(solution) {
        this.solution = solution;
        this.active = true;
        this.render();
    }
}