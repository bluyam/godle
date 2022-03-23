const keyBoardTemplate = document.createElement('template');
keyBoardTemplate.innerHTML = `
    <style>
    button {
        text-transform: uppercase;
    }
    .keyboard {
        padding-top: 10px;
    }
    </style>
    <div class="keyboard">
        <div class="first-row">
            <button>q</button>
            <button>w</button>
            <button>e</button>
            <button>r</button>
            <button>t</button>
            <button>y</button>
            <button>u</button>
            <button>i</button>
            <button>o</button>
            <button>p</button>
        </div>
        <div class="second-row">
            <button>a</button>
            <button>s</button>
            <button>d</button>
            <button>f</button>
            <button>g</button>
            <button>h</button>
            <button>j</button>
            <button>k</button>
            <button>l</button>
        </div>
        <div class="third-row">
            <button>enter</button>
            <button>z</button>
            <button>x</button>
            <button>c</button>
            <button>v</button>
            <button>b</button>
            <button>n</button>
            <button>m</button>
            <button>delete</button>
        </div>
    </div>
`;

class KeyBoard extends HTMLElement {
    constructor() {
      super();  
      // guess input should contain 5 letter tiles
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(keyBoardTemplate.content.cloneNode(true));
      
    }
}

window.customElements.define('key-board', KeyBoard);