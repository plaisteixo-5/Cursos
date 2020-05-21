var elementInput = document.querySelector('#app input')
var elementList = document.querySelector('#app ul')
var elementButton = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodo() {

    elementList.innerHTML = '';

    for(item of todos) {
        let todoElement = document.createElement('li');
        let textoT = document.createTextNode(item);

        let linkT = document.createElement('a');
        let linkText = document.createTextNode('Excluir');
        linkT.setAttribute('href', '#')

        var pos = todos.indexOf(item);
        linkT.setAttribute('onclick','deleteTodo('+pos+')')

        linkT.appendChild(linkText);

        todoElement.appendChild(textoT);
        todoElement.appendChild(linkT);
        elementList.appendChild(todoElement);
    }
}

function addTodo() {
    var todoText = elementInput.value;

    todos.push(todoText);
    elementInput.value = '';
    renderTodo();
    saveToStorage();
}

elementButton.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodo();
    saveToStorage();
}

renderTodo();

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}