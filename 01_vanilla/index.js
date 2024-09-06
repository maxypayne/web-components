const change = () => {
  const p = document.querySelector('.to-change');
  p.innerHTML = 'Changed text';
}

const addItem = () => {
  const ul  = document.querySelector('#list');
  const childrenlength = ul.children.length;
  const el = document.createElement('li');
  el.classList.add('added-item');
  el.innerHTML = `Item ${childrenlength + 1} added`;
  ul.appendChild(el);
}