import '../css/index.css'

const list = document.querySelector('.list-group');

list.addEventListener('click', e => {
  let target = null;

  if (e.target.classList.contains('delete-button')) {
    deleteBranch(e.target);
  }
  if (e.target.classList.contains('list-group-item-text')) {
    target = e.target;
  }

  if (target != null) {
    const text = target.textContent;
    const floor = getParentBranchNumber(target);
    makeBranch(target, floor, text);
  }
});

function makeBranch(e, number, text) {
  const newList = document.createElement('ul');
  const div = document.createElement('div');
  const li = document.createElement('li');
  const span = document.createElement('span');
  newList.classList.add('new-branch');
  div.classList.add('delete-button');
  li.classList.add('list-group-item-branch');
  span.textContent = `${text}-${number}`;
  span.classList.add('list-group-item-text');
  newList.append(div);
  li.append(span);
  newList.appendChild(li);
  e.parentNode.append(newList);
}

function getParentBranchNumber(target) {
  let number = null;
  const allChilds = target.parentNode.children;
  const text = target.textContent;

  let ulCount = 0;

  for (let i = 0; i < allChilds.length; i++) {
    if (allChilds[i].tagName.toLowerCase() === 'ul') {
      ulCount++;
    }
  }

  return ulCount + 1;
}

function deleteBranch(target) {
  target.parentNode.remove();
}
