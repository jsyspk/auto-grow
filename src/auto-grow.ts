const template = document.createElement('template');

class AutoGrow extends HTMLElement {

    constructor() {
        super();
        template.innerHTML = this.template;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {

    }

    get template() {
        return `
    <div>This is a div</div>

<textarea rows="5"></textarea>
`;
    }

}
window.customElements.define('auto-grow', AutoGrow);
