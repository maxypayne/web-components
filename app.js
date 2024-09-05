import Card from "./components/card.components.js";
import Button from "./components/button-component.js";
customElements.define('app-button', Button);
customElements.define('app-card', Card);

const myButton = document.querySelector('.change-button');
myButton.addEventListener('click', () => {
  console.log('clicked');
  const myCard = document.querySelector('app-card');
  myCard.setAttribute('prefix', 'Changed');
})

// const myel = document.querySelector('my-button').shadowRoot.querySelector('button');