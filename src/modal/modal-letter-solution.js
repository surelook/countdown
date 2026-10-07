const tiles = (word) => `
    <div class="solution-tiles">
        ${[...word].map(letter => `<span>${letter}</span>`).join('')}
    </div>`;

export class ModalLetterSolution extends HTMLElement {
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

    template = () => {
        const [best, ...others] = this.words ?? [];

        return `
        <div class="modal${this.active ? ' is-active' : ''}">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <h4>Dictionary Corner</h4>
                                ${best ? tiles(best) : '<p class="no-words">No words to be found!</p>'}
                                ${others.length ? `<div class="also">Also: ${others.join(', ')}</div>` : ''}
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="#" data-action="dismiss" class="card-footer-item">Continue</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        `.trim();
    }

    render() {
        this.innerHTML = this.template();
    }

    setSolution(words) {
        this.words = words;
        this.active = true;
        this.render();
    }
}
