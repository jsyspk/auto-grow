class AutoGrow extends HTMLElement {
    public shadowRoot: any;
    private root: any;

    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = this.template;
        this.root = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {

    }

    get template() {
        return `
     
    <div>This is a div</div>

    `;
    }

}
window.customElements.define('auto-grow', AutoGrow);
