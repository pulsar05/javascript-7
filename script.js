const todoinputEl = document.getElementById('todo');
console.log(todoinputEl);
const btninputEl = document.getElementById('submit');
console.log(btninputEl);
const todolistinput = document.getElementById('task-list');
console.log(todolistinput);



const addtodo = (todo) => {
    const todolistitem = document.createElement('li');
    todolistitem.classList.add('todo-item');
    todolistitem.innerHTML = `<span class =
    "todo-item-title">${todo}</span>`
    todolistinput.appendChild(todolistitem);

    todolistinput.value = '';
}


btninputEl.addEventListener('click',() => {
    const todo = todoinputEl.value;
    if(todo){
        addtodo(todo);

    }
    else{
        alert('please enter the task in todo form');
    }
})