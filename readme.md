Commencer par posser la question de html dynamique puis jquery
1. Creer une classe qui extends HtmlElement
 -custom elements.define('comp-name', Class);
2. Montrer les elements avec query de body 
3. Les prefixes,
  - ajouter un prefix
  - ecouter son changement
  - changer l'attribut
  - montrer l'attribut dans le html
4. Ecouter le changement d'attribut

5. Transformer en module via 
  - npx http-server --cors

6. Shadow dom
  - montrer le container dans le html
  - application du css
  - montrer que il n y a pas dans documents ce node via query selector
  acces: document.querySelector('my-button').shadowRoot.querySelector('button');
  si closed cette ligne affiche une erreur

7. Slot
8. template
9. Faire le css avec un button


  voir root host et companies