class Card extends HTMLElement {

  static get observedAttributes () { return ['prefix']}
  constructor() {
    super();
    this.classList.add('my-card');
    this.createButton();
    this.handlePrefix();
  }
  createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Click here';
    button.addEventListener('click', () => {
      console.log('button clicked');
    });
    this.appendChild(button);
  }
  connectedCallback() {
    console.log(arguments);
  }
  handlePrefix() {
    const prefix = this.getAttribute('prefix');
    const prefixSpan = document.createElement('span');
    prefixSpan.classList.add('prefix-span');
    prefixSpan.innerHTML = prefix;
    this.appendChild(prefixSpan);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'prefix' && oldValue != newValue) {
      const prefixSpan = document.querySelector('.prefix-span');
      prefixSpan.innerHTML = newValue;
    }
    console.log(arguments);
  }
}
customElements.define('app-card', Card);


const myButton = document.querySelector('.change-button');
myButton.addEventListener('click', () => {
  console.log('clicked');
  const myCard = document.querySelector('app-card');
  myCard.setAttribute('prefix', 'Changed');
})
