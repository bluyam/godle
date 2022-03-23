const fauxLogoTemplate = document.createElement('template');
fauxLogoTemplate.innerHTML = `
    <style>
    button {
        font-style: oblique;
        font-weight: 600;
        font-size: 26px;
    }
    </style>
`;

class FauxLogo extends HTMLElement {
    constructor() {
      super();  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(fauxLogoTemplate.content.cloneNode(true));
    }
}

window.customElements.define('faux-logo', FauxLogo);