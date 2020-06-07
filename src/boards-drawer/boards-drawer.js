export class BoardDrawer extends HTMLElement {
    connectedCallback () {
        this.addEventListener('click', () => this.active = !this.active);
    }

    get active () {
       return this.hasAttribute('active');
    }

    set active (bool) {
        if (bool) {
            this.setAttribute('active', '');
        } else {
            this.removeAttribute('active');
        }
    }
}