'use strict'

const todoInput = document.querySelector('.input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

function addTodo(event){

  event.preventDefault();

  if(todoInput.value.length>0){
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedBtn = document.createElement("button");
  completedBtn.innerHTML='<i class="fa fa-check"></i>';
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML='<i class="fa fa-trash"></i>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}
else{
  alert("Task cannot be empty!")
}
}

function deleteTask(e){
  const item = e.target;
  
  if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement;
    todo.remove();
  }

  if(item.classList[0]==="complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
  


todoBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTask);
