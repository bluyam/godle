const letterTileTemplate = document.createElement('template');
letterTileTemplate.innerHTML = `
    <style>
        div {
            border-style: solid;
            border-color: lightgrey;
            border-width: 2px;
            height: 100%;
            width: 100%;
        }
    </style>
    <div><slot name="letter" /></div>
`;

class LetterTile extends HTMLElement {
    constructor() {
      super();  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(letterTileTemplate.content.cloneNode(true));
      this.innerText = this.getAttribute('letter');
    }
}

window.customElements.define('letter-tile', LetterTile);