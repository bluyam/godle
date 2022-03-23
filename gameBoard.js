const gameBoardTemplate = document.createElement('template');
gameBoardTemplate.innerHTML = `
    <style>
    .game-board {
        display: grid;
        row-gap: 10px;
    }
    </style>
    <div class="game-board">
        <guess-input></guess-input>
        <guess-input></guess-input>
        <guess-input></guess-input>
        <guess-input></guess-input>
        <guess-input></guess-input>
        <guess-input></guess-input>
    </div>
`;

class GameBoard extends HTMLElement {
    constructor() {
      super();  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(gameBoardTemplate.content.cloneNode(true));
      
    }
}

window.customElements.define('game-board', GameBoard);