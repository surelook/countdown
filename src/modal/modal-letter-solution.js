export class ModalLetterSolution extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if (event.target.matches('[data-action="dismiss"]')) {
                event.preventDefault();
                this.active = false;
                this.render();
            }

            if (event.target.matches('[data-action="next"]')) {
                event.preventDefault();
                this.nextSolution();
            }

            if (event.target.matches('[data-action="previous"]')) {
                event.preventDefault();
                this.previousSolution();
            }
        })
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
                            <div class="content">
                                <div class="letters">
                                    ${(() => {
                                        if (this.solutions.length) {
                                            return this.solutions[this.currentIndex].split('').map((letter) => {
                                                return `<div class="letter-tile">${letter}</div>`
                                            }).join('')
                                        }
                                    })()}
                                </div>
                                ${this.currentIndex > 0
                                    ? `<a data-action="previous"><i class="fas fa-angle-left"></i></a>`
                                    : '<span><i class="fas fa-angle-left"></i></span>'
                                }
                                ${this.currentIndex + 1} of ${this.solutions.length}
                                ${this.currentIndex < this.solutions.length
                                    ? `<a data-action="next"><i class="fas fa-angle-right"></i></a>`
                                    : '<span><i class="fas fa-angle-right"></i></span>'
                                }
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

    nextSolution() {
        this.currentIndex++;
        this.render();
    }

    previousSolution() {
        this.currentIndex--;
        this.render();
    }

    setSolutions(solutions) {
        this.solutions = solutions;
        this.active = true;
        this.currentIndex = 0
        this.render();
    }
}