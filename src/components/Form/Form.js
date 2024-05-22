import React from 'react';
import './Form.css'
const Form = () => {
    const Enter = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            agregarTarea();
        }
    };

    const agregarTarea = () => {
    };

    const mostrarTareaMasVeloz = () => {
    };

    const BorrarTodo = () => {
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
