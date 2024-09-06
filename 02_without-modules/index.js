class Card extends HTMLElement {
  static get observedAttributes () { return ['prefix']}
  constructor() {
    super();
    this.innerHTML = 'Tetx';
    this.createButton();
    this.addStyle();
    this.getAllAttributes();
  }

  createButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Click here';
    button.classList.add('my-button');
    this.appendChild(button);
  }
  addStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
    button {
      color: white;
      font-size: 16px;
      font-weight: 600;
      background-color: green;
    }`;
    this.appendChild(style);
  }
  getAllAttributes() {
    console.log(this.getAttributeNames());
    console.log(this.getAttribute('prefix'));
    
  }
  attributeChangedCallback() {
    console.log('arguments');
    console.log(arguments);
  }
}

customElements.define('app-card', Card);


const changeAttribut = () => {
  const card = document.querySelector('app-card');
  console.log(card);
  card.setAttribute('prefix', 'Changed');
}