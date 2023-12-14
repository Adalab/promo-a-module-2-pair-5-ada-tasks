'use strict';  

//QUERY SELECTOR

const taskInput = document.querySelector('.js__taskInput');
const taskBtn = document.querySelector('.js__taskBtn');
const taskFilter = document.querySelector('.js__taskFilter');
const filterBtn = document.querySelector('.js__filterBtn');
const taskList = document.querySelector('.js__taskList');

const form = document.querySelector('.js__form');

// VARIABLES GLOBALES DE DATOS 

const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];

//FUNCIONES

getTask = () => {
    const taskInputValue = taskInput.value;
    taskList.innerHTML = '';
    for (const task of tasks) {
       taskList.innerHTML += `<li>${tasks.name}</li>`;
   } 
}

//EVENTOS

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

taskBtn.addEventListener('click', (event) => {
   getTask();
});



//CODIGO PARA CARGAR LA PAGINA
