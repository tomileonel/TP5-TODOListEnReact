import React from 'react';
import '../Form/Form.css'
const Form = ({setTodos,todos}) => {
    const Enter = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            agregarTarea();
        }
    };

    const agregarTarea = () => {
        let input = document.getElementById("todoInput");
        const todoText = validarTarea(input.value);
        const tareaExistente = todos.find(tarea => tarea.text === todoText);
        if (tareaExistente) {
          alert("Ya existe una tarea con ese nombre.");
        }else{
        if (todoText !== "") {
          const timestamp = new Date().getTime();
          const todo = {
            text: todoText, created: timestamp, completed: null
          }
          setTodos((todos) => [...todos,todo])
          input.value = "";
        }else{
          alert("Debes designarle un nombre a la tarea.")
        }
      }
    };

    const mostrarTareaMasVeloz = () => {
        const tareaMasVeloz = todos.reduce((min, todo) => {
            if (todo.completed && (min === null || (todo.completed - todo.created) < (min.completed - min.created))) {
                return todo;
            } else {
                return min;
            }
        }, null);
      
        if (tareaMasVeloz) {
            alert("La tarea mas veloz es: " + tareaMasVeloz.text);
        } else {
            alert("No hiciste nada aun amigazo");
        }
    };

    const BorrarTodo = () => {
        setTodos((todos) => [])
    };

    function validarTarea(tarea) {
        while (tarea.toString().includes(" - ")) {
            tarea = tarea.toString().replace(" - ", "").trim();
        }
        return tarea;
    }
      

    return (
        <div>
            <input onKeyUp={Enter} type="text" id="todoInput" placeholder="Agrega tareas" />
            <button onClick={agregarTarea}>Agregar</button>
            <button onClick={mostrarTareaMasVeloz}>🚗</button>
            <button onClick={BorrarTodo}>Alt+f4</button>
        </div>
    );
};

export default Form;
