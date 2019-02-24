let itemCounter = 0;
const maxActionItems = 10;

const maximumMessage = document.querySelector('.message');
const inputField = document.querySelector('.todo-add__input');
const addButton = document.querySelector('.todo-add__btn');
const todoList = document.querySelector('.todo-list');


inputField.oninput = function (event) {
    const inputText = inputField.value.trim();
    addButton.disabled = !inputField;
    if (event.key === 'Enter' && inputText) {
        addItem(inputText);
    }
}


addButton.onclick = function () {
    addItem(inputField.value.trim());
}

const addItem = function (inputText) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'todo-list-item');
    listItem.setAttribute('draggable', true);

    const text = document.createElement('span');
    text.appendChild(document.createTextNode(inputText));

    const checkIcon = document.createElement('i');
    checkIcon.setAttribute('class', 'material-icons');
    checkIcon.appendChild(document.createTextNode('check_box_outline_blank'));

    const deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'material-icons');
    deleteIcon.appendChild(document.createTextNode('delete'));

    const checkButton = document.createElement('button');
    checkButton.setAttribute('class', 'todo-list-item__checkbox');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'todo-list-item__remove');

    checkButton.appendChild(checkIcon);
    checkButton.appendChild(text);
    deleteButton.appendChild(deleteIcon);
    listItem.appendChild(checkButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    listItem.addEventListener('dragstart', handleDragStart, false);
    listItem.addEventListener('dragenter', handleDragEnter, false)
    listItem.addEventListener('dragover', handleDragOver, false);
    listItem.addEventListener('dragleave', handleDragLeave, false);
    listItem.addEventListener('drop', handleDrop, false);

    if (++itemCounter >= maxActionItems) {
        inputField.disabled = true;
        maximumMessage.style.visibility = 'visible';
    }

    checkButton.onclick = function () {
        checkIcon.textContent = 'check_box';
    }

    deleteButton.onclick = function () {
        listItem.remove();
        itemCounter--;
        inputField.disabled = false;
        maximumMessage.style.visibility = 'hidden';
    }

    inputField.value = '';
    addButton.disabled = true;
}


let dragSrcEl = null;

function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}


