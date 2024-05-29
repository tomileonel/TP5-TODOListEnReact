import { useInsertionEffect } from "react";

const Todo = ({ setTodos, todos, todo }) => {
  const Completar = () => {
    const index = todos.findIndex((item) => item.text === todo.text);

    if (index !== -1) {
      const updatedTodos = [...todos];
      
      const updatedTodo = { ...updatedTodos[index] };
      
      if(updatedTodo.completed){
        updatedTodo.completed = null;
      }else{
      updatedTodo.completed = new Date();
    }
      updatedTodos[index] = updatedTodo;

      setTodos(updatedTodos);
    }
      
    // * Agarrar el objecto del array todos
    // * Cambiarlo
    // * Actualizar el array llamando a la funcion setTodos
  };

  return (
    <li
      onClick={Completar}
      data-created={todo.created}
      data-completed={todo.completed || ""}
    >
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>{" "}
      - Creado: {new Date(todo.created).toLocaleString()}
      {todo.completed && ` - Completado: ${new Date(todo.completed).toLocaleString()}`}
    </li>
  );
};

export default Todo;
