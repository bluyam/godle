const guessInputTemplate = document.createElement('template');
guessInputTemplate.innerHTML = `
    <style>
    .guess-input {
        display: grid;
        grid-template-columns: 60px 60px 60px 60px 60px;
        grid-template-rows: 60px;
        column-gap: 10px;
    }
    </style>
    <div class="guess-input">
        <letter-tile></letter-tile>
        <letter-tile></letter-tile>
        <letter-tile></letter-tile>
        <letter-tile></letter-tile>
        <letter-tile></letter-tile>
    </div>
`;

class GuessInput extends HTMLElement {
    constructor() {
      super();  
      // guess input should contain 5 letter tiles
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(guessInputTemplate.content.cloneNode(true));
      
    }
}

window.customElements.define('guess-input', GuessInput);