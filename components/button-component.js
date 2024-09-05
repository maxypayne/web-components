export default class Button extends HTMLElement {
  constructor() {
    super();

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "components/my-button.css");
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.innerHTML = `
      <slot name="top"></slot>
      <button><slot name="inside"/></button>
    `;
    this.shadow.appendChild(linkElem);
  }

}